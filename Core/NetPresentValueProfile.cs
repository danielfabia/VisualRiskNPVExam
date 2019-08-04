using System;
using System.Collections.Generic;
using System.Text;

namespace Core
{
    public class NetPresentValueProfile
    {
        public decimal InitialValue { get; internal set; }
        public decimal[] Values { get; internal set; }
        public float Rate { get; internal set; }
        public decimal NetPresentValue { get; internal set; }
    }
}
