export default interface Employee {
  id: string;
  foto: string;
  nombreCompleto: string;
  puestoDeTrabajo: string;
  salario: number;
  estatus: boolean;
  fechaDeContratacion: string | Date;
  nombreCompletoBeneficiario: string;
  parentescoBeneficiario: string;
  sexoBeneficiario: string;
  fechaDeNacimientoBeneficiario: string | Date;
}
