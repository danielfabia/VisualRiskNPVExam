using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Data.Entities
{
    public class RateNpv
    {
        public int Id { get; set; }
        public float Rate { get; set; }
        public decimal Npv { get; set; }
        public int NpvProfileId { get; set; }
    }
}
