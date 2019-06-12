import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {environment} from 'src/environments/environment';

import { map } from 'rxjs/operators';
import 'rxjs/Rx';

@Injectable({
  providedIn: 'root'
})
export class EmployeesService {
  urlBase = environment.urlBase;
  employee: any;
  employees: any;

  constructor(private http: HttpClient) {
  }

  getEmployees(){
    const employee = `${this.urlBase}/allemployees`;

    return this.http.get(employee).pipe(map((res: any) => {
      return this.employees = res;
    }));
  }

}
