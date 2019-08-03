
using AutoMapper;
using Data.Entities;
using System.Collections.Generic;
using System.Linq;

namespace WebApi.Models
{
    public class ModelMappingProfile : Profile
    {
        public ModelMappingProfile()
        {
            CreateMap<NpvProfileRequestModel, NpvProfileModel>()
                .ReverseMap();

            CreateMap<RateNpv, ProfileModel>()
                .ReverseMap();

            //CreateMap<decimal[], ICollection<CashFlow>>()
            //    .ForMember(dest => dest, src => src.MapFrom(value => value.Select(_ => new CashFlow { Value = _ }).ToList()));

            CreateMap<NpvProfile, NpvProfileModel>()
                .ForMember(dest => dest.Values, src => src.MapFrom(n => n.CashFlows.Select(_ => _.Value).ToArray()))
                .ForMember(dest => dest.Profiles, src => src.MapFrom(n => n.NPVs))                
                .ReverseMap();
            CreateMap<NpvProfileModel, NpvProfile>()
                .ForMember(dest => dest.CashFlows, src => src.MapFrom(n => n.Values.Select(_ => new CashFlow { Value = _ }).ToList()))
                .ForMember(dest => dest.NPVs, src => src.MapFrom(n => n.Profiles));

            CreateMap<NpvProfile, NpvProfileSavedModel>()
                .ForMember(dest => dest.Values, src => src.MapFrom(n => n.CashFlows.Select(_ => _.Value).ToArray()))
                .ForMember(dest => dest.Profiles, src => src.MapFrom(n => n.NPVs))
                .ReverseMap();
            CreateMap<NpvProfileSavedModel, NpvProfile>()
                .ForMember(dest => dest.CashFlows, src => src.MapFrom(n => n.Values.Select(_ => new CashFlow { Value = _ }).ToList()))
                .ForMember(dest => dest.NPVs, src => src.MapFrom(n => n.Profiles));

            CreateMap<NpvProfile, NpvProfileNameModel>()
                .ReverseMap();
        }
    }
}