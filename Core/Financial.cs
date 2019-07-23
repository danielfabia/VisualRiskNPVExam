using System;
using System.Collections.Generic;
using System.Linq;

namespace Core
{
    public class Financial
    {
        public static double PresentValue(double value, double rate, int period)
        {
            return value / Math.Pow((1 + (rate / 100)), period);
        }

        public static double NetPresentValue(double initialValue, double rate, double[] values)
        {
            var i = 0;
            var npv = values.Sum(_ => 
            {
                i++;
                return PresentValue(_, rate, i);
            });

            return -initialValue + npv;
        }

        public static NetPresentValueProfile[] NetPresentValueProfiles(double initialValue, double[] values, double[] rates)
        {
            var npvProfileList = new List<NetPresentValueProfile>();

            foreach (var rate in rates)
            {
                var npvProfile = new NetPresentValueProfile
                {
                    InitialValue = initialValue,
                    Values = values,
                    Rate = rate
                };

                var npv = NetPresentValue(initialValue, rate, values);

                npvProfileList.Add(new NetPresentValueProfile
                {
                    InitialValue = initialValue,
                    Values = values,
                    Rate = rate,
                    NPV = npv
                });
            }

            return npvProfileList.ToArray();
        }
    }
}
