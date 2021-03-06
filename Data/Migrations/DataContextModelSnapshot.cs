﻿// <auto-generated />
using System;
using Data;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;

namespace Data.Migrations
{
    [DbContext(typeof(DataContext))]
    partial class DataContextModelSnapshot : ModelSnapshot
    {
        protected override void BuildModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "2.1.11-servicing-32099")
                .HasAnnotation("Relational:MaxIdentifierLength", 128)
                .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

            modelBuilder.Entity("Data.Entities.CashFlow", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<int?>("NpvProfileId");

                    b.Property<decimal>("Value")
                        .HasColumnType("decimal(18,4)");

                    b.HasKey("Id");

                    b.HasIndex("NpvProfileId");

                    b.ToTable("CashFlows");
                });

            modelBuilder.Entity("Data.Entities.NpvProfile", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<decimal>("InitialCost")
                        .HasColumnType("decimal(18,4)");

                    b.Property<float>("LowerBoundRate");

                    b.Property<string>("Name");

                    b.Property<float>("RateIncrement");

                    b.Property<float>("UpperBoundRate");

                    b.HasKey("Id");

                    b.ToTable("NpvProfiles");
                });

            modelBuilder.Entity("Data.Entities.RateNpv", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<decimal>("Npv")
                        .HasColumnType("decimal(18,4)");

                    b.Property<int?>("NpvProfileId");

                    b.Property<float>("Rate");

                    b.HasKey("Id");

                    b.HasIndex("NpvProfileId");

                    b.ToTable("RateNpvs");
                });

            modelBuilder.Entity("Data.Entities.CashFlow", b =>
                {
                    b.HasOne("Data.Entities.NpvProfile")
                        .WithMany("CashFlows")
                        .HasForeignKey("NpvProfileId");
                });

            modelBuilder.Entity("Data.Entities.RateNpv", b =>
                {
                    b.HasOne("Data.Entities.NpvProfile")
                        .WithMany("NPVs")
                        .HasForeignKey("NpvProfileId");
                });
#pragma warning restore 612, 618
        }
    }
}
