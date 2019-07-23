using System;
using System.Collections.Generic;
using System.Text;

namespace Core
{
    public class NetPresentValueProfile
    {
        public double InitialValue { get; set; }
        public double[] Values { get; set; }
        public double Rate { get; set; }
        public double NPV { get; set; }
    }
}
