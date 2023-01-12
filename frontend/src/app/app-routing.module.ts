import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// import { LoginComponent } from './modules/auth/containers/login/login.component';
// import { LoginGuard } from './core/guards/login.guard';
// import { AdministradoresModule } from './modules/administradores/administradores.module';
// import { ResetComponent } from './modules/auth/containers/reset/reset.component';
import { EmployeeComponent } from './pages/employee/employee.component';
import { FormComponent } from './pages/form/form.component';

const routes: Routes = [
  { path: '', redirectTo: 'employees', pathMatch: 'full' },
  { path: 'employees', component: EmployeeComponent },
  { path: 'employees/create', component: FormComponent },
  { path: 'employees/edit', component: FormComponent },
  { path: 'employees/show', component: FormComponent },
  { path: '**', redirectTo: 'employees', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
