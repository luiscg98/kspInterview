import { Component, Input, OnInit } from '@angular/core';
import Employee from '../../models/employee.model';
import { EmployeeService } from '../../services/employee.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.sass'],
})
export class CardComponent implements OnInit {
  @Input() employee: Employee = {
    id: '',
    foto: '',
    nombreCompleto: '',
    puestoDeTrabajo: '',
    salario: 2000,
    estatus: true,
    fechaDeContratacion: '',
    nombreCompletoBeneficiario: '',
    sexoBeneficiario: '',
    fechaDeNacimientoBeneficiario: '',
    parentescoBeneficiario: '',
  };
  constructor(private eService: EmployeeService, private router: Router) {}

  ngOnInit(): void {}

  delete(id: string): void {
    this.eService.deleteEmployee(id).subscribe(
      (data: any) => {},
      (error) => {
        alert('Empleado dado de baja');
        this.router.navigateByUrl('/employees');
      }
    );
  }
}
