import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import Employee from '../../models/employee.model';
import { EmployeeService } from '../../services/employee.service';
import {
  Router,
  Event,
  NavigationStart,
  NavigationEnd,
  NavigationError,
  ActivatedRoute,
} from '@angular/router';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent implements OnInit {
  form: FormGroup = new FormGroup({});
  formDisabled: boolean = false;
  alertNombreCompleto: string = 'NOMBRE VACIO';
  alertFoto: string = 'NOMBRE VACIO';
  alertPuestoDeTrabajo: string = 'NOMBRE VACIO';
  alertSalario: string = 'NOMBRE VACIO';
  alertEstatus: string = 'NOMBRE VACIO';
  alertFechaDeContratacion: string = 'NOMBRE VACIO';
  alertNombreCompletoBeneficiario: string = 'NOMBRE VACIO';
  alertParentescoBeneficiario: string = 'NOMBRE VACIO';
  alertSexoBeneficiario: string = 'NOMBRE VACIO';
  alertFechaDeNacimientoBeneficiario: string = 'NOMBRE VACIO';
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

  textButton = 'Guardar';

  currentRoute = '/';

  constructor(
    private route: ActivatedRoute,
    private fb: FormBuilder,
    private eService: EmployeeService,
    private router: Router
  ) {
    this.router.events.subscribe((event: Event) => {
      if (event instanceof NavigationEnd) {
        this.currentRoute = event.url;
        this.currentRoute = this.currentRoute.split('/')[2];

        if (this.currentRoute[0] == 'e') {
          this.textButton = 'Editar';
        }
      }
    });
  }

  ngOnInit(): void {
    this.route.queryParams.subscribe((data: any) => {
      this.employee = data;
      this.createForm();
    });
  }

  createForm(): void {
    this.form = this.fb.group({
      id: [this.employee.id, Validators.required],
      nombreCompleto: [this.employee.nombreCompleto, Validators.required],
      foto: [this.employee.foto, Validators.required],
      puestoDeTrabajo: [this.employee.puestoDeTrabajo, Validators.required],
      salario: [this.employee.salario, Validators.required],
      estatus: [this.employee.estatus, Validators.required],
      fechaDeContratacion: [
        this.employee.fechaDeContratacion,
        Validators.required,
      ],
      nombreCompletoBeneficiario: [
        this.employee.nombreCompletoBeneficiario,
        Validators.required,
      ],
      parentescoBeneficiario: [
        this.employee.parentescoBeneficiario,
        Validators.required,
      ],
      sexoBeneficiario: [this.employee.sexoBeneficiario, Validators.required],
      fechaDeNacimientoBeneficiario: [
        this.employee.fechaDeNacimientoBeneficiario,
        Validators.required,
      ],
    });
    this.formDisabled = true;
    if (this.currentRoute[0] === 's') {
      this.form.disable();
    }
  }

  get nombreCompletoNoValido(): boolean {
    if (this.formDisabled) {
      return (
        this.form.controls['nombreCompleto'].invalid &&
        this.form.controls['nombreCompleto'].touched
      );
    } else {
      return false;
    }
  }

  get fotoNoValido(): boolean {
    if (this.formDisabled) {
      return (
        this.form.controls['foto'].invalid && this.form.controls['foto'].touched
      );
    } else {
      return false;
    }
  }

  get puestoDeTrabajoNoValido(): boolean {
    if (this.formDisabled) {
      return (
        this.form.controls['puestoDeTrabajo'].invalid &&
        this.form.controls['puestoDeTrabajo'].touched
      );
    } else {
      return false;
    }
  }

  get salarioNoValido(): boolean {
    if (this.formDisabled) {
      return (
        this.form.controls['salario'].invalid &&
        this.form.controls['salario'].touched
      );
    } else {
      return false;
    }
  }

  get estatusNoValido(): boolean {
    if (this.formDisabled) {
      return (
        this.form.controls['estatus'].invalid &&
        this.form.controls['estatus'].touched
      );
    } else {
      return false;
    }
  }

  get fechaDeContratacionNoValido(): boolean {
    if (this.formDisabled) {
      return (
        this.form.controls['fechaDeContratacion'].invalid &&
        this.form.controls['fechaDeContratacion'].touched
      );
    } else {
      return false;
    }
  }

  get nombreCompletoBeneficiarioNoValido(): boolean {
    if (this.formDisabled) {
      return (
        this.form.controls['nombreCompletoBeneficiario'].invalid &&
        this.form.controls['nombreCompletoBeneficiario'].touched
      );
    } else {
      return false;
    }
  }

  get parentescoBeneficiarioNoValido(): boolean {
    if (this.formDisabled) {
      return (
        this.form.controls['parentescoBeneficiario'].invalid &&
        this.form.controls['parentescoBeneficiario'].touched
      );
    } else {
      return false;
    }
  }

  get sexoBeneficiarioNoValido(): boolean {
    if (this.formDisabled) {
      return (
        this.form.controls['sexoBeneficiario'].invalid &&
        this.form.controls['sexoBeneficiario'].touched
      );
    } else {
      return false;
    }
  }

  get fechaDeNacimientoBeneficiarioNoValido(): boolean {
    if (this.formDisabled) {
      return (
        this.form.controls['fechaDeNacimientoBeneficiario'].invalid &&
        this.form.controls['fechaDeNacimientoBeneficiario'].touched
      );
    } else {
      return false;
    }
  }

  save(): void {
    if (this.textButton == 'Guardar') {
      this.eService
        .saveEmployee(this.igualarValores())
        .subscribe((data: any) => {
          alert('Empleado dado de alta');
          this.router.navigateByUrl('/employees');
        });
    } else {
      this.eService
        .updateEmployee(this.igualarValores())
        .subscribe((data: any) => {
          alert('Empleado actualizado');
          this.router.navigateByUrl('/employees');
        });
    }
  }

  igualarValores(): Employee {
    return {
      id: this.employee.id,
      foto: this.form.controls['foto'].value,
      nombreCompleto: this.form.controls['nombreCompleto'].value,
      puestoDeTrabajo: this.form.controls['puestoDeTrabajo'].value,
      salario: this.form.controls['salario'].value,
      estatus: Boolean(this.form.controls['estatus'].value),
      fechaDeContratacion: new Date(
        this.form.controls['fechaDeContratacion'].value
      ),
      nombreCompletoBeneficiario:
        this.form.controls['nombreCompletoBeneficiario'].value,
      sexoBeneficiario: this.form.controls['sexoBeneficiario'].value,
      parentescoBeneficiario:
        this.form.controls['parentescoBeneficiario'].value,
      fechaDeNacimientoBeneficiario:
        this.form.controls['fechaDeNacimientoBeneficiario'].value,
    };
  }
}
