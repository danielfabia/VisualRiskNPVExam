using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace WebApi.Models
{
    public class ProfileModel
    {
        public float Rate { get; set; }
        public decimal Npv { get; set; }
    }

    public class NetPresentValueProfileModel
    {
        public NetPresentValueProfileModel()
        {
            Profiles = new List<ProfileModel>();
        }

        public decimal InitialValue { get; set; }
        public decimal[] Values { get; set; }
        public float LowerBoundRate { get; set; }
        public float UpperBoundRate { get; set; }
        public float RateIncrement { get; set; }
        public List<ProfileModel> Profiles { get; set; }
    }
}
