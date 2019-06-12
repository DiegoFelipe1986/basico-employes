import { Component, OnInit } from '@angular/core';
import { EmployeesService } from '../../services/employees.service';


@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent implements OnInit {
  employeeList: any[] = [];

  constructor(public employees: EmployeesService) { }

  ngOnInit() {

    this.employees.getEmployees().subscribe(data =>{
      this.employeeList = data;
    });
  }

}
