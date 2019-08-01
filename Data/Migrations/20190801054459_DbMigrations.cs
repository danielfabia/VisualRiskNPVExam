using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;

namespace Data.Migrations
{
    public partial class DbMigrations : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "NpvProfiles",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    Name = table.Column<string>(nullable: true),
                    InitialCost = table.Column<decimal>(type: "decimal(18,4)", nullable: false),
                    LowerBoundRate = table.Column<float>(nullable: false),
                    UpperBoundRate = table.Column<float>(nullable: false),
                    RateIncrement = table.Column<float>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_NpvProfiles", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "CashFlows",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    Value = table.Column<decimal>(type: "decimal(18,4)", nullable: false),
                    NpvProfileId = table.Column<int>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_CashFlows", x => x.Id);
                    table.ForeignKey(
                        name: "FK_CashFlows_NpvProfiles_NpvProfileId",
                        column: x => x.NpvProfileId,
                        principalTable: "NpvProfiles",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateTable(
                name: "RateNpvs",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    Rate = table.Column<float>(nullable: false),
                    Npv = table.Column<decimal>(type: "decimal(18,4)", nullable: false),
                    NpvProfileId = table.Column<int>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_RateNpvs", x => x.Id);
                    table.ForeignKey(
                        name: "FK_RateNpvs_NpvProfiles_NpvProfileId",
                        column: x => x.NpvProfileId,
                        principalTable: "NpvProfiles",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateIndex(
                name: "IX_CashFlows_NpvProfileId",
                table: "CashFlows",
                column: "NpvProfileId");

            migrationBuilder.CreateIndex(
                name: "IX_RateNpvs_NpvProfileId",
                table: "RateNpvs",
                column: "NpvProfileId");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "CashFlows");

            migrationBuilder.DropTable(
                name: "RateNpvs");

            migrationBuilder.DropTable(
                name: "NpvProfiles");
        }
    }
}
