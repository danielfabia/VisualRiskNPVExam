using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Design;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Data
{
    public class DataContextFactory : IDesignTimeDbContextFactory<DataContext> // For Code First Migration
    {
        public DataContext CreateDbContext(string[] args)
        {
            var optionsBuilder = new DbContextOptionsBuilder<DataContext>();
            optionsBuilder.UseSqlServer("server=localhost;Database=VRNPVDb;Integrated Security=true;");

            return new DataContext(optionsBuilder.Options);
        }
    }
}
