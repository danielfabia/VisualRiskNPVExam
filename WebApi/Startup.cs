using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Reflection;
using System.Threading.Tasks;
using AutoMapper;
using Data;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Logging;
using Microsoft.Extensions.Options;
using Repository;
using FluentValidation.AspNetCore;

namespace NPVWebApi
{
    public class Startup
    {
        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        public IConfiguration Configuration { get; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {
            services.AddCors();

            services.AddMvc()
                .SetCompatibilityVersion(CompatibilityVersion.Version_2_1)
                .AddFluentValidation(fvc => fvc.RegisterValidatorsFromAssembly(Assembly.GetExecutingAssembly()));

            services.AddSwaggerGen(setupAction =>
            {
                setupAction.SwaggerDoc(
                    "WebAPIOpenAPISpecification",
                    new Swashbuckle.AspNetCore.Swagger.Info
                    {
                        Title= "Net Present Value API",
                        Version = "1.0"
                    });

                setupAction.IncludeXmlComments(Path.Combine(AppContext.BaseDirectory, "WebApi.xml"));
            });

            services.AddDbContext<DataContext>(cfg =>
            {
                cfg.UseSqlServer(Configuration.GetConnectionString("NPVConnectionString"));
            });

            services.AddAutoMapper(Assembly.GetExecutingAssembly());
            services.AddTransient<INpvProfileRepository, NpvProfileRepository>();
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IHostingEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }

            app.UseSwagger();

            app.UseSwaggerUI(setupAction =>
            {
                setupAction.SwaggerEndpoint("/swagger/WebAPIOpenAPISpecification/swagger.json", "Net Present Value API");
                setupAction.RoutePrefix = "";
            });

            app.UseCors(options =>
                options
                    .AllowAnyOrigin()
                    .AllowAnyMethod()
                    .AllowAnyHeader()
                    .AllowCredentials());

            app.UseMvc();
        }
    }
}
