using AutoMapper;
using Data.Entities;
using Microsoft.AspNetCore.Mvc;
using Repository;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using WebApi.Models;

namespace WebApi.Controllers
{
    /// <summary>
    /// API for saving NPV Profile data
    /// </summary>
    [Route("api/[controller]")]
    [ApiController]
    public class NpvProfileController : ControllerBase
    {
        private readonly INpvProfileRepository npvpRepository;
        private readonly IMapper mapper;

        /// <summary>
        /// Constructor
        /// </summary>
        public NpvProfileController(INpvProfileRepository npvpRepository, IMapper mapper)
        {
            this.npvpRepository = npvpRepository;
            this.mapper = mapper;
        }

        /// <summary>
        /// Get all NPV profiles.
        /// </summary>
        /// <returns>List of NpvProfileModel</returns>
        [HttpGet]
        public async Task<IActionResult> Get()
        {
            try
            {
                var result = await npvpRepository.GetAllAsync();

                var model = mapper.Map<IEnumerable<NpvProfileSavedModel>>(result);

                return Ok(model);
            }
            catch (Exception)
            {
                // TODO: log errors
                return BadRequest("Failed to get profiles");
            }
        }

        /// <summary>
        /// Get NPV profiles by ID
        /// </summary>
        /// <param name="id">Id</param>
        /// <returns>Return a single NpvProfileModel</returns>
        [HttpGet("{id}")]
        public async Task<IActionResult> Get(int id)
        {
            try
            {
                var result = await npvpRepository.GetByIdAsync(id);

                if (result == null)
                    return NotFound("Profile not found");

                var model = mapper.Map<NpvProfileSavedModel>(result);

                return Ok(model);
            }
            catch (Exception)
            {
                // TODO: log errors
                return BadRequest("Failed to get profile with id: " + id);
            }
        }

        /// <summary>
        /// Get NPV profiles with ID and name only
        /// </summary>
        /// <returns>List of NpvProfileModel</returns>
        [HttpGet()]
        [Route("Names")]
        public async Task<IActionResult> GetNpvProfileNames()
        {
            try
            {
                var result = await npvpRepository.GetAllAsync();

                var model = mapper.Map<IEnumerable<NpvProfileNameModel>>(result);

                return Ok(model);
            }
            catch (Exception)
            {
                // TODO: log errors
                return BadRequest("Failed to get profiles");
            }
        }

        /// <summary>
        /// Add new NPV profile
        /// </summary>
        /// <param name="model">NpvProfileModel</param>
        /// <param name="name">Name of profile</param>
        /// <returns></returns>
        [HttpPost()]
        public async Task<IActionResult> AddProfile([FromBody]NpvProfileModel model, [FromQuery]string name)
        {
            // TODO: validation

            try
            {
                var newProfile = mapper.Map<NpvProfile>(model);
                newProfile.Name = name;

                newProfile = await npvpRepository.AddAsync(newProfile);

                var npvProfileName = mapper.Map<NpvProfileNameModel>(newProfile);

                return Created("", npvProfileName);
            }
            catch (Exception)
            {
                // TODO: log errors
                return BadRequest("Failed to saved profile");
            }
        }

        /// <summary>
        /// Update a NPV profile.
        /// </summary>
        /// <param name="model">NpvProfileModel</param>
        /// <returns></returns>
        [HttpPut()]
        public async Task<IActionResult> UpdateProfile([FromBody]NpvProfileSavedModel model)
        {
            try
            {
                var updatedProfile = mapper.Map<NpvProfile>(model);

                updatedProfile = await npvpRepository.UpdateAsync(updatedProfile);

                var npvProfileName = mapper.Map<NpvProfileNameModel>(updatedProfile);

                return Ok(npvProfileName);
            }
            catch (Exception)
            {
                // TODO: log errors
                return BadRequest("Failed to saved profile");
            }
        }
    }
}
