using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace WebApi.Models
{
    /// <summary>
    /// NetPresentValueProfileModel
    /// </summary>
    public class NetPresentValueProfileModel
    {
        /// <summary>
        /// Construtor
        /// </summary>
        public NetPresentValueProfileModel()
        {
            Profiles = new List<ProfileModel>();
        }

        /// <summary>
        /// Initial Cost
        /// </summary>
        public decimal InitialCost { get; set; }
        /// <summary>
        /// List of Cash Flows
        /// </summary>
        public decimal[] Values { get; set; }
        /// <summary>
        /// Lower Bound Discount Rate
        /// </summary>
        public float LowerBoundRate { get; set; }
        /// <summary>
        /// Upper Bound Discount Rate
        /// </summary>
        public float UpperBoundRate { get; set; }
        /// <summary>
        /// Discount Rate increment
        /// </summary>
        public float RateIncrement { get; set; }
        /// <summary>
        /// List of NPV Profiles
        /// </summary>
        public List<ProfileModel> Profiles { get; set; }
    }
}
