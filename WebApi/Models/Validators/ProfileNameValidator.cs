using System.Threading;
using System.Threading.Tasks;
using FluentValidation.Validators;
using Repository;

namespace WebApi.Models.Validators
{
    public class ProfileNameValidator : PropertyValidator
    {
        private readonly INpvProfileRepository npvpRepository;

        public ProfileNameValidator(INpvProfileRepository npvpRepository)
               : base("Profile name already exists")
        {
            this.npvpRepository = npvpRepository;
        }

        protected override bool IsValid(PropertyValidatorContext context)
        {
            if (context.PropertyValue == null)
                return false;

            var data = (string)context.PropertyValue;

            var result = npvpRepository.IsProfileNameExists(data).Result;

            return !result;
        }
    }
}