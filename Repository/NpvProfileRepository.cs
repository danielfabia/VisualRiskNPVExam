using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Data;
using Data.Entities;
using Microsoft.EntityFrameworkCore;

namespace Repository
{
    public class NpvProfileRepository : INpvProfileRepository
    {
        private readonly DataContext context;

        public NpvProfileRepository(DataContext context)
        {
            this.context = context;
        }

        public IEnumerable<NpvProfile> GetAll()
        {
            var query = context.NpvProfiles
                            .Include(_ => _.CashFlows)
                            .Include(_ => _.NPVs);

            return query.ToList();
        }

        public async Task<IEnumerable<NpvProfile>> GetAllAsync()
        {
            var query = context.NpvProfiles
                            .Include(_ => _.CashFlows)
                            .Include(_ => _.NPVs);

            return await query.ToListAsync();
        }

        public NpvProfile GetById(int id)
        {
            var query = context.NpvProfiles.Where(_ => _.Id == id)
                        .Include(_ => _.CashFlows)
                        .Include(_ => _.NPVs);

            return query.FirstOrDefault();
        }

        public async Task<NpvProfile> GetByIdAsync(int id)
        {
            var query = context.NpvProfiles.Where(_ => _.Id == id)
                        .Include(_ => _.CashFlows)
                        .Include(_ => _.NPVs);

            return await query.FirstOrDefaultAsync();
        }

        public NpvProfile Add(NpvProfile newProfile)
        {
            context.Add(newProfile);
            context.SaveChanges();

            return newProfile;
        }

        public async Task<NpvProfile> AddAsync(NpvProfile newProfile)
        {
            context.Add(newProfile);
            await context.SaveChangesAsync();

            return newProfile;
        }

        public NpvProfile Update(NpvProfile updatedProfile)
        {
            // delete related records first
            DeleteNpvProfileRelations(updatedProfile.Id);

            context.Entry(updatedProfile).State = EntityState.Modified;

            updatedProfile.CashFlows.ToList().ForEach(_ =>
            {
                context.Attach(_);
            });

            updatedProfile.NPVs.ToList().ForEach(_ =>
            {
                context.Attach(_);
            });

            context.SaveChanges();

            return updatedProfile;
        }

        public async Task<NpvProfile> UpdateAsync(NpvProfile updatedProfile)
        {
            // delete related records first
            await DeleteNpvProfileRelations(updatedProfile.Id);

            context.Entry(updatedProfile).State = EntityState.Modified;

            updatedProfile.CashFlows.ToList().ForEach(_ =>
            {
                context.Attach(_);
            });

            updatedProfile.NPVs.ToList().ForEach(_ =>
            {
                context.Attach(_);
            });

            await context.SaveChangesAsync();

            return updatedProfile;
        }

        private async Task<int> DeleteNpvProfileRelations(int npvProfileId)
        {
            var cashFlows = await context.CashFlows.Where(_ => _.NpvProfileId == npvProfileId).ToListAsync();
            context.CashFlows.RemoveRange(cashFlows);

            var npvs = await context.RateNpvs.Where(_ => _.NpvProfileId == npvProfileId).ToListAsync();
            context.RateNpvs.RemoveRange(npvs);

            var result = await context.SaveChangesAsync();

            return result;
        }
    }
}
