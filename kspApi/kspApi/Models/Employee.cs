using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.ComponentModel.DataAnnotations;

namespace kspApi.Models
{
    public class Employee
    {
        [Key]
        public Guid Id { get; set; }
        public string Foto { get; set; }
        public string NombreCompleto { get; set; }
        public string PuestoDeTrabajo { get; set; }
        public float Salario { get; set; }
        public bool Estatus { get; set; }
        public DateTime FechaDeContratacion { get; set; }

        public string NombreCompletoBeneficiario { get; set; }
        public string ParentescoBeneficiario { get; set; }
        public DateTime FechaDeNacimientoBeneficiario { get; set; }
        public string SexoBeneficiario { get; set; }

    }
}
