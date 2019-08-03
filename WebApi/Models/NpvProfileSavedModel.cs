using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace WebApi.Models
{
    /// <summary>
    /// NpvProfileSavedModel
    /// </summary>
    public class NpvProfileSavedModel : NpvProfileModel
    {
        /// <summary>
        /// Id of the saved NpvProfile
        /// </summary>
        public int Id { get; set; }
        /// <summary>
        /// Name of the saved NpvProfile
        /// </summary>
        public string Name { get; set; }
    }
}
