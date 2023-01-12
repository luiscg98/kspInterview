import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import Employee from '../models/employee.model';

@Injectable({
  providedIn: 'root',
})
export class EmployeeService {
  uri: string = environment.baseUrl;

  constructor(private http: HttpClient) {}

  getEmployees(): Observable<any> {
    return this.http.get(this.uri + '/Employees');
  }

  saveEmployee(employee: Employee): Observable<any> {
    console.log(employee);
    return this.http.post(this.uri + '/Employees', employee);
  }

  updateEmployee(employee: Employee): Observable<any> {
    return this.http.put(this.uri + `/Employees/${employee.id}`, employee);
  }

  deleteEmployee(id: string): Observable<any> {
    return this.http.delete(this.uri + `/Employees/${id}`);
  }
}
