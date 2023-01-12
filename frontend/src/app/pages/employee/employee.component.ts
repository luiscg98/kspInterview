import { Component, OnInit } from '@angular/core';
import Employee from '../../models/employee.model';
import { EmployeeService } from '../../services/employee.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss'],
})
export class EmployeeComponent implements OnInit {
  workers: Employee[] = [];
  constructor(private eService: EmployeeService) {}

  ngOnInit(): void {
    this.eService.getEmployees().subscribe((response: Employee[]) => {
      this.workers = response;
    });
  }
}
