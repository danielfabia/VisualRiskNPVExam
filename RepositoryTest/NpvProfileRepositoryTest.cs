using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using Data;
using Data.Entities;
using System.Collections.Generic;
using Repository;

namespace RepositoryTest
{
    [TestClass]
    public class NpvProfileRepositoryTest
    {
        
        [TestMethod]
        public void GetAllTest()
        {
            List<NpvProfile> list = null;

            using (var context = this.TestingContext)
            {
                var repository = new NpvProfileRepository(context);
                list = repository.GetAll() as List<NpvProfile>;
            }

            Assert.IsNotNull(list, "list is null");
            Assert.IsTrue(list.Count == 2, "list.Count is not 2");
            Assert.IsNotNull(list[0].CashFlows, "CashFlow is null");
            Assert.IsTrue(list[0].CashFlows.Count == 3, "CashFlow count is not 3");
            Assert.IsNotNull(list[0].NPVs, "NPVs is null");
            Assert.IsTrue(list[0].NPVs.Count == 3, "CashFlow count is not 3");
        }

        [TestMethod]
        public void GetByIdTest()
        {
            NpvProfile npvP = null;

            using (var context = this.TestingContext)
            {
                var repository = new NpvProfileRepository(context);
                npvP = repository.GetById(1);
            }

            Assert.IsNotNull(npvP, "npvP is null");
            Assert.IsTrue(npvP.Id == 1, "npvP.Id is not 1");
            Assert.IsNotNull(npvP.CashFlows, "CashFlow is null");
            Assert.IsTrue(npvP.CashFlows.Count == 3, "CashFlow count is not 3");
            Assert.IsNotNull(npvP.NPVs, "NPVs is null");
            Assert.IsTrue(npvP.NPVs.Count == 3, "CashFlow count is not 3");
        }

        [TestMethod]
        public void AddTest()
        {
            NpvProfile npvP = null;

            using (var context = this.TestingContext)
            {
                var repository = new NpvProfileRepository(context);

                npvP = new NpvProfile
                {
                    Name = "Profile New",
                    InitialCost = 100M,
                    LowerBoundRate = 0.1F,
                    UpperBoundRate = 0.2F,
                    RateIncrement = 0.5F,
                    CashFlows = new List<CashFlow>
                    {
                        new CashFlow { Value = 1 }
                    },
                    NPVs = new List<RateNpv>
                    {
                        new RateNpv { Rate = 0.1F, Npv = 1000M }
                    }
                };

                npvP = repository.Add(npvP);
            }

            Assert.IsNotNull(npvP, "npvP is null");
            Assert.AreEqual(3, npvP.Id, "Id is not equal");
            Assert.AreEqual("Profile New", npvP.Name, "Name is not equal");
            Assert.IsNotNull(npvP.CashFlows, "CashFlow is null");
            Assert.IsTrue(npvP.CashFlows.Count == 1, "CashFlow count is not 1");
            Assert.IsNotNull(npvP.NPVs, "NPVs is null");
            Assert.IsTrue(npvP.NPVs.Count == 1, "CashFlow count is not 1");
        }

        [TestMethod]
        public void UpdateTest()
        {
            NpvProfile npvP = null;

            using (var context = this.TestingContext)
            {
                var repository = new NpvProfileRepository(context);

                npvP = new NpvProfile
                {
                    Id = 2,
                    Name = "Profile 2 Updated",
                    InitialCost = 100M,
                    LowerBoundRate = 0.1F,
                    UpperBoundRate = 0.2F,
                    RateIncrement = 0.5F,
                    CashFlows = new List<CashFlow>
                    {
                        new CashFlow { Value = 1 }
                    },
                    NPVs = new List<RateNpv>
                    {
                        new RateNpv { Rate = 0.1F, Npv = 1000M }
                    }
                };

                npvP = repository.Update(npvP);
            }

            Assert.IsNotNull(npvP, "npvP is null");
            Assert.AreEqual(2, npvP.Id, "Id is not equal");
            Assert.AreEqual("Profile 2 Updated", npvP.Name, "Name is not equal");
            Assert.IsNotNull(npvP.CashFlows, "CashFlow is null");
            Assert.IsTrue(npvP.CashFlows.Count == 1, "CashFlow count is not 1");
            Assert.IsNotNull(npvP.NPVs, "NPVs is null");
            Assert.IsTrue(npvP.NPVs.Count == 1, "CashFlow count is not 1");
        }

        private DataContext TestingContext
        {
            get
            {
                var options = new DbContextOptionsBuilder<DataContext>()
                                    .UseInMemoryDatabase(Guid.NewGuid().ToString())
                                    .Options;
                var context = new DataContext(options);

                var p1 = new NpvProfile
                {
                    //Id = 1,
                    Name = "Profile 1",
                    InitialCost = 1000,
                    UpperBoundRate = 1.00F,
                    LowerBoundRate = 2.00F,
                    RateIncrement = 0.5F,
                    CashFlows = new List<CashFlow> {
                        new CashFlow { Value = 500 },
                        new CashFlow { Value = 600 },
                        new CashFlow { Value = 700 },
                    },
                    NPVs = new List<RateNpv>
                    {
                        new RateNpv { Rate = 0.01F, Npv = 762.64M },
                        new RateNpv { Rate = 0.015F, Npv = 744.43M },
                        new RateNpv { Rate = 0.02F, Npv = 726.52M },
                    }
                };

                var p2 = new NpvProfile
                {
                    //Id = 1,
                    Name = "Profile 2",
                    InitialCost = 5000,
                    UpperBoundRate = 3.20F,
                    LowerBoundRate = 2.20F,
                    RateIncrement = 0.6F,
                    CashFlows = new List<CashFlow> {
                        //new CashFlow { Id = 1, NpvProfileId = 1, Value = 500 },
                        //new CashFlow { Id = 2, NpvProfileId = 1, Value = 600 },
                        //new CashFlow { Id = 3, NpvProfileId = 1, Value = 700 },
                        new CashFlow { Value = 500 },
                        new CashFlow { Value = 600 },
                        new CashFlow { Value = 700 },
                    },
                    NPVs = new List<RateNpv>
                    {
                        //new RateNpv { NpvProfileId = 1, Id = 1, Rate = 0.01F, Npv = 762.64M},
                        //new RateNpv { NpvProfileId = 1, Id = 2, Rate = 0.015F, Npv = 744.43M},
                        //new RateNpv { NpvProfileId = 1, Id = 3, Rate = 0.02F, Npv = 726.52M},
                        new RateNpv { Rate = 0.022F, Npv = -3280.56M },
                        new RateNpv { Rate = 0.028F, Npv = -3301.51M }
                    }
                };

                context.NpvProfiles.Add(p1);
                context.NpvProfiles.Add(p2);
                context.SaveChanges();

                return context;
            }
        }
    }
}
