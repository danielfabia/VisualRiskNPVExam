using System;
using System.Collections.Generic;
using System.Linq;

namespace Core
{
    public class Financial
    {
        
        public static decimal PresentValue(decimal value, float rate, int period)
        {
            var pv = value / (decimal)Math.Pow(1 + rate, period);

            return pv;

            // alternatte formula
            // PV = value * PV Factor
            // where PV Factor = 1 / (1 + rate)^period
        }

        public static decimal NetPresentValue(decimal initialValue, float rate, decimal[] values)
        {
            var i = 0;
            var pvCashFlows = values.Sum(v => 
            {
                i++;
                return PresentValue(v, rate, i);
            });

            var npv = pvCashFlows - initialValue;

            return npv;
        }

        public static IEnumerable<NetPresentValueProfile> NetPresentValueProfiles(decimal initialValue, decimal[] values, float[] rates)
        {
            var npvProfileList = new List<NetPresentValueProfile>();

            foreach (var rate in rates)
            {
                var npv = NetPresentValue(initialValue, rate, values);

                npvProfileList.Add(new NetPresentValueProfile
                {
                    InitialValue = initialValue,
                    Values = values,
                    Rate = rate,
                    NetPresentValue = npv
                });
            }

            return npvProfileList;
        }

        public static IEnumerable<NetPresentValueProfile> NetPresentValueProfiles(decimal initialValue, decimal[] values,
            float lowerBoundRate, float upperBoundRate, float rateIncrement)
        {
            var rates = new List<float>();
            for (float rate = lowerBoundRate; rate <= upperBoundRate; rate += rateIncrement)
            {
                rates.Add(rate / 100);
            }

            var npvProfileList = NetPresentValueProfiles(initialValue, values, rates.ToArray());

            return npvProfileList;
        }
    }
}
