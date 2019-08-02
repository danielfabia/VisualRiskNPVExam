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

        public IEnumerable<NpvProfile> GetById(int id)
        {
            var query = context.NpvProfiles.Where(_ => _.Id == id)
                        .Include(_ => _.CashFlows)
                        .Include(_ => _.NPVs);
                        
            return query.ToList(); 
        }

        public async Task<IEnumerable<NpvProfile>> GetByIdAsync(int id)
        {
            var query = context.NpvProfiles.Where(_ => _.Id == id)
                        .Include(_ => _.CashFlows)
                        .Include(_ => _.NPVs);

            return await query.ToListAsync();
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

        public NpvProfile Update(NpvProfile newProfile)
        {
            throw new NotImplementedException();
        }

        public Task<NpvProfile> UpdateAsync(NpvProfile newProfile)
        {
            throw new NotImplementedException();
        }
    }
}
