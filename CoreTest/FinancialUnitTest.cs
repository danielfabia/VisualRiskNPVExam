using Core;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using System;
using System.Collections.Generic;
using System.Linq;

namespace CoreTest
{
    [TestClass]
    public class FinancialUnitTest
    {
        [TestMethod]
        public void PresentValueNegativeValueAndZeroPeriod()
        {
            var initialValue = -1000;
            var pv = Financial.PresentValue(initialValue, 0.10F, 0);

            Assert.IsTrue(pv < 0);
            Assert.AreEqual(initialValue, pv);
        }

        [TestMethod]
        public void PresentValuePeriod1()
        {
            var initialValue = 400;
            var rate = 0.10F;
            var period = 1;

            var pv = Financial.PresentValue(initialValue, rate, period);

            Assert.AreEqual(363.64M, Math.Round(pv, 2));
        }

        [TestMethod]
        public void PresentValuePeriod2()
        {
            var initialValue = 600;
            var rate = 0.10F;
            var period = 2;

            var pv = Financial.PresentValue(initialValue, rate, period);

            Assert.AreEqual(495.87M, Math.Round(pv, 2));
        }

        [TestMethod]
        public void NetPresentValuePositive()
        {
            var initialValue = 1000;
            var rate = 0.10F;
            var values = new decimal[] { 400, 600, 200 };

            var npv = Financial.NetPresentValue(initialValue, rate, values);

            Assert.IsTrue(npv > 0);
            Assert.AreEqual(9.77M, Math.Round(npv, 2));
        }

        [TestMethod]
        public void NetPresentValueNegative()
        {
            var initialValue = 1000;
            var rate = 0.11F;
            var values = new decimal[] { 400, 600, 200 };

            var npv = Financial.NetPresentValue(initialValue, rate, values);

            Assert.IsTrue(npv < 0);
            Assert.AreEqual(-6.43M, Math.Round(npv, 2));
        }

        [TestMethod]
        public void NetPresentValueProfilesTest()
        {
            var initialValue = 1000;
            var values = new decimal[] { 400, 600, 200 };
            var rates = new float[] { 5, 10 };

            var list = Financial.NetPresentValueProfiles(initialValue, values, rates);

            Assert.IsNotNull(list);
            Assert.AreEqual(list.Count(), 2);
        }

        [TestMethod]
        public void NetPresentValueProfilesWithRateRange()
        {
            var initialValue = 10000;
            var values = new decimal[] { 1000, 1500, 2000 };
            var lowerRate = 1.00F;
            var upperRate = 1.50F;
            var increment = 0.25F;

            var list = Financial.NetPresentValueProfiles(initialValue, values, lowerRate, upperRate, increment).ToList();

            Assert.IsNotNull(list);
            Assert.AreEqual(list.Count(), 3);
            Assert.AreEqual(-5598.28M, Math.Round(list[0].NetPresentValue, 2));
            Assert.AreEqual(-5622.32M, Math.Round(list[1].NetPresentValue, 2));
            Assert.AreEqual(-5646.15M, Math.Round(list[2].NetPresentValue, 2));
        }

        [TestMethod]
        [ExpectedException(typeof(ArgumentException))]
        public void NetPresentValueProfilesWithZeroRateIncrement()
        {
            var initialValue = 10000;
            var values = new decimal[] { 1000, 1500, 2000 };
            var lowerRate = 1.00F;
            var upperRate = 1.50F;
            var increment = 0;

            var list = Financial.NetPresentValueProfiles(initialValue, values, lowerRate, upperRate, increment).ToList();
        }
    }
}
