using kspApi.Data;
using kspApi.Models;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace kspApi.Repository
{
    
        public class EmployeeRepository : IRepository
        {
            private readonly AppDbContext appDbContext;

            public EmployeeRepository(AppDbContext appDbContext)
            {
                this.appDbContext = appDbContext;
            }

            public async Task<Employee> AddEmployee(Employee employee)
            {

                var result = await appDbContext.Employees.AddAsync(employee);
                await appDbContext.SaveChangesAsync();
                return result.Entity;
            }

            public async Task DeleteEmployee(Guid employeeId)
            {
                var result = await appDbContext.Employees
                    .FirstOrDefaultAsync(e => e.Id == employeeId);

                if (result != null)
                {
                result.Estatus = !result.Estatus;
                await appDbContext.SaveChangesAsync();
            }
            }


            public async Task<IEnumerable<Employee>> GetEmployees()
            {
                return await appDbContext.Employees.ToListAsync();
            }

        public async Task<Employee> GetEmployee(Guid employeeId)
        {
            return await appDbContext.Employees
                .FirstOrDefaultAsync(e => e.Id == employeeId);
        }


        public async Task<Employee> UpdateEmployee(Employee employee)
            {
                var result = await appDbContext.Employees
                    .FirstOrDefaultAsync(e => e.Id == employee.Id);

                if (result != null)
                {
                    result.NombreCompleto = employee.NombreCompleto;
                    result.Foto = employee.Foto;
                    result.PuestoDeTrabajo = employee.PuestoDeTrabajo;
                    result.Salario = employee.Salario;
                    result.Estatus = employee.Estatus;
                    result.FechaDeContratacion = employee.FechaDeContratacion;
                    result.NombreCompletoBeneficiario = employee.NombreCompletoBeneficiario;
                    result.ParentescoBeneficiario = employee.ParentescoBeneficiario;
                    result.FechaDeNacimientoBeneficiario = employee.FechaDeNacimientoBeneficiario;
                    result.SexoBeneficiario = employee.SexoBeneficiario;

                    await appDbContext.SaveChangesAsync();

                    return result;
                }

                return null;
            }
        }
    
}
