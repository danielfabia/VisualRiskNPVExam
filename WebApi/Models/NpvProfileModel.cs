using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace WebApi.Models
{
    /// <summary>
    /// NpvProfileModel
    /// </summary>
    public class NpvProfileModel
    {
        /// <summary>
        /// Construtor
        /// </summary>
        public NpvProfileModel()
        {
            this.Profiles = new List<ProfileModel>();
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
