import { Component, OnInit } from '@angular/core';
import Employee from '../../models/employee.model';

@Component({
  selector: 'app-button-add',
  templateUrl: './button-add.component.html',
  styleUrls: ['./button-add.component.scss'],
})
export class ButtonAddComponent implements OnInit {
  employee: Employee = {
    id: '50f83c45-7b72-4494-a5bc-2a0d6eae9eb8',
    nombreCompleto: '',
    foto: '',
    puestoDeTrabajo: '',
    salario: 0,
    estatus: true,
    fechaDeContratacion: '',
    nombreCompletoBeneficiario: '',
    parentescoBeneficiario: '',
    sexoBeneficiario: '',
    fechaDeNacimientoBeneficiario: '',
  };
  constructor() {}

  ngOnInit(): void {}
}
