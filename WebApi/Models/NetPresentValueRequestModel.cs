using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace WebApi.Models
{
    public class NetPresentValueRequestModel
    {
        public decimal InitialValue { get; set; }
        public float Rate { get; set; }
        public decimal[] Values { get; set; }
    }
}
