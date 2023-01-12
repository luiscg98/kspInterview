using Microsoft.EntityFrameworkCore;
using kspApi.Models;
using System;

namespace kspApi.Data
{
    public class AppDbContext : DbContext
    {
        public AppDbContext(DbContextOptions<AppDbContext> options)
            : base(options)
        {

        }

        public DbSet<Employee> Employees { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);

            modelBuilder.Entity<Employee>().HasData(new Employee
            {
                Id = new Guid("90d10994-3bdd-4ca2-a178-6a35fd653c59"),
                Foto = "https://scontent-dub4-1.xx.fbcdn.net/v/t1.6435-9/84139256_523628248534229_3398780270420164608_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=88KGS473T_wAX_6cTJf&_nc_ht=scontent-dub4-1.xx&oh=00_AfC-mtqoUJWBizOfE-Q9u3V17qtcl8tct9gb-IE4HeXy-g&oe=63E78073",
                NombreCompleto = "Luis David Chávez Grimaldo",
                PuestoDeTrabajo = "Software Enginner",
                Salario = 12000,
                Estatus = true,
                FechaDeContratacion = new DateTime(2023, 01, 12),
                NombreCompletoBeneficiario = "Francisco Chávez Blanco",
                ParentescoBeneficiario = "Padre",
                FechaDeNacimientoBeneficiario = new DateTime(1967, 09, 01),
                SexoBeneficiario = "Masculino"
            });

            
        }
    }
}