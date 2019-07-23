using Core;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using System;

namespace CoreTest
{
    [TestClass]
    public class FinancialUnitTest
    {
        [TestMethod]
        public void PresentValueNegativeValueAndZeroPeriod()
        {
            var initialValue = -1000;
            var pv = Financial.PresentValue(initialValue, 10, 0);

            Assert.IsTrue(pv < 0);
            Assert.AreEqual(initialValue, pv);
        }

        [TestMethod]
        public void PresentValuePeriod1()
        {
            var pv = Financial.PresentValue(400, 10, 1);

            Assert.AreEqual(363.64, Math.Round(pv, 2));
        }

        [TestMethod]
        public void PresentValuePeriod2()
        {
            var pv = Financial.PresentValue(600, 10, 2);

            Assert.AreEqual(495.87, Math.Round(pv, 2));
        }

        [TestMethod]
        public void NetPresentValuePositive()
        {
            var npv = Financial.NetPresentValue(1000, 10, new double[] { 400, 600, 200 });

            Assert.IsTrue(npv > 0);
            Assert.AreEqual(9.77, Math.Round(npv, 2));
        }

        [TestMethod]
        public void NetPresentValueNegative()
        {
            var npv = Financial.NetPresentValue(1000, 11, new double[] { 400, 600, 200 });

            Assert.IsTrue(npv < 0);
            Assert.AreEqual(-6.43, Math.Round(npv, 2));
        }

        [TestMethod]
        public void NetPresentValueProfilesTest()
        {
            var values = new double[] { 400, 600, 200 };
            var rates = new double[] { 5, 10 };

            var list = Financial.NetPresentValueProfiles(1000, values, rates);

            Assert.IsNotNull(list);
            Assert.AreEqual(list.Length, 2);
        }
    }
}
