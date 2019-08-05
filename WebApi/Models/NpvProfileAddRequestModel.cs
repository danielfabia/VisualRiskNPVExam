using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace WebApi.Models
{
    /// <summary>
    /// NpvProfileAddRequestModel
    /// </summary>
    public class NpvProfileAddRequestModel : NpvProfileRequestBase
    {
        /// <summary>
        /// Name of the saved NpvProfile
        /// </summary>
        [Required]
        public string Name { get; set; }
        /// <summary>
        /// List of NPV Profiles
        /// </summary>
        public List<ProfileModel> Profiles { get; set; }
    }
}
