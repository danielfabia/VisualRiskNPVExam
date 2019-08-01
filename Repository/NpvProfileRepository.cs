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
            var list = context.NpvProfiles
                        .Include(_ => _.CashFlows)
                        .Include(_ => _.NPVs)
                        .ToList();

            return list;
        }

        public IEnumerable<NpvProfile> GetById(int id)
        {
            var list = context.NpvProfiles.Where(_ => _.Id == id)
                        .Include(_ => _.CashFlows)
                        .Include(_ => _.NPVs)
                        .ToList();

            return list;
        }

        public NpvProfile Add(NpvProfile newProfile)
        {
            context.Add(newProfile);
            context.SaveChanges();

            return newProfile;
        }

        public NpvProfile Update(NpvProfile newProfile)
        {
            throw new NotImplementedException();
        }
    }
}
