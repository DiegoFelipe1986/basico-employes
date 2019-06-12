import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmployeesComponent } from './components/employees/employees.component';
import { CreateEmployeComponent } from './components/create-employe/create-employe.component';

const routes: Routes = [
  { path: 'employess', component: EmployeesComponent },
  { path: 'createEmployee', component: CreateEmployeComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'employess' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
