using System;
using System.Collections.Generic;
using System.Text;

namespace Core
{
    public class NetPresentValueProfile
    {
        public decimal InitialValue { get; set; }
        public decimal[] Values { get; set; }
        public float Rate { get; set; }
        public decimal NetPresentValue { get; set; }
    }
}
