using Microsoft.EntityFrameworkCore;
using kspApi.Models;
using System;

namespace kspApi.Data
{
    public class DbInitializer
    {
        private readonly ModelBuilder _builder;

        public DbInitializer(ModelBuilder builder)
        {
            _builder = builder;
        }

        public void Seed()
        {
            _builder.Entity<Employee>(a =>
            {
                a.HasData(new Employee
                {
                    Id = new Guid("90d10994-3bdd-4ca2-a178-6a35fd653c59"),
                    Foto = "https://www.facebook.com/photo/?fbid=523628245200896&set=a.115853749311683",
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
            });

        }
    }
}