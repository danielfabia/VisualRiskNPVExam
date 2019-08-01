using Data.Entities;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Data
{
    public class DataContext : DbContext
    {
        public DataContext(DbContextOptions<DataContext> options) : base(options)
        {
        }

        public DbSet<NpvProfile> NpvProfiles { get; set; }
        public DbSet<CashFlow> CashFlows { get; set; }
        public DbSet<RateNpv> RateNpvs { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);

            modelBuilder.Entity<NpvProfile>()
                .Property(p => p.InitialCost)
                .HasColumnType("decimal(18,4)");

            modelBuilder.Entity<CashFlow>()
                .Property(p => p.Value)
                .HasColumnType("decimal(18,4)");

            modelBuilder.Entity<RateNpv>()
                .Property(p => p.Npv)
                .HasColumnType("decimal(18,4)");
        }

    }
}
