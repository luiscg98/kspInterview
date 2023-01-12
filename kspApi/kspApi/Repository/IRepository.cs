using kspApi.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace kspApi.Repository
{
    public interface IRepository
    {
        Task<IEnumerable<Employee>> GetEmployees();
        Task<Employee> AddEmployee(Employee employee);
        Task<Employee> UpdateEmployee(Employee employee);
        Task DeleteEmployee(Guid employeeId);

        Task<Employee> GetEmployee(Guid employeeId);
    }
}

