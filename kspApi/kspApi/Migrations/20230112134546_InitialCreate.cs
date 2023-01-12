using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace kspApi.Migrations
{
    public partial class InitialCreate : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Employees",
                columns: table => new
                {
                    Id = table.Column<Guid>(type: "uniqueidentifier", nullable: false),
                    Foto = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    NombreCompleto = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    PuestoDeTrabajo = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Salario = table.Column<float>(type: "real", nullable: true),
                    Estatus = table.Column<bool>(type: "bit", nullable: true),
                    FechaDeContratacion = table.Column<DateTime>(type: "datetime2", nullable: false),
                    NombreCompletoBeneficiario = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    ParentescoBeneficiario = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    FechaDeNacimientoBeneficiario = table.Column<DateTime>(type: "datetime2", nullable: false),
                    SexoBeneficiario = table.Column<string>(type: "nvarchar(max)", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Employees", x => x.Id);
                });

            migrationBuilder.InsertData(
                table: "Employees",
                columns: new[] { "Id", "Estatus", "FechaDeContratacion", "FechaDeNacimientoBeneficiario", "Foto", "NombreCompleto", "NombreCompletoBeneficiario", "ParentescoBeneficiario", "PuestoDeTrabajo", "Salario", "SexoBeneficiario" },
                values: new object[] { new Guid("90d10994-3bdd-4ca2-a178-6a35fd653c59"), true, new DateTime(2023, 1, 12, 0, 0, 0, 0, DateTimeKind.Unspecified), new DateTime(1967, 9, 1, 0, 0, 0, 0, DateTimeKind.Unspecified), "https://scontent-dub4-1.xx.fbcdn.net/v/t1.6435-9/84139256_523628248534229_3398780270420164608_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=88KGS473T_wAX_6cTJf&_nc_ht=scontent-dub4-1.xx&oh=00_AfC-mtqoUJWBizOfE-Q9u3V17qtcl8tct9gb-IE4HeXy-g&oe=63E78073", "Luis David Chávez Grimaldo", "Francisco Chávez Blanco", "Padre", "Software Enginner", 12000f, "Masculino" });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Employees");
        }
    }
}
