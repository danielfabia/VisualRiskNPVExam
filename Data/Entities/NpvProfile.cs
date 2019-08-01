using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Data.Entities
{
    public class NpvProfile
    {
        public int Id { get; set; }
        public decimal InitialCost { get; set; }
        public float LowerBoundRate { get; set; }
        public float UpperBoundRate { get; set; }
        public float RateIncrement { get; set; }
        public ICollection<CashFlow> CashFlows { get; set; }
    }
}