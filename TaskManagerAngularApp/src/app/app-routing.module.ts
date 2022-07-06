import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TeamsComponent } from './components/teams/teams.component';
import { ClientsComponent } from './components/clients/clients.component';
import { EmployeeTasksComponent } from './components/employee-tasks/employee-tasks.component';
import { EmployeesComponent } from './components/employees/employees.component';
import { PlantsComponent } from './components/plants/plants.component';
import { ProjectsComponent } from './components/projects/projects.component';

import { AddComponent } from './components/teams/add/add.component';
import { AddClientComponent } from './components/clients/add-client/add-client.component';
import { AddEmployeeTaskComponent } from './components/employee-tasks/add-employee-task/add-employee-task.component';
import { AddEmployeeComponent } from './components/employees/add-employee/add-employee.component';
import { AddPlantComponent } from './components/plants/add-plant/add-plant.component';
import { AddProjectComponent } from './components/projects/add-project/add-project.component';


import { EditComponent } from './components/teams/edit/edit.component';
import { EditClientComponent } from './components/clients/edit-client/edit-client.component';
import { EditEmployeeTaskComponent } from './components/employee-tasks/edit-employee-task/edit-employee-task.component';
import { EditEmployeeComponent } from './components/employees/edit-employee/edit-employee.component';
import { EditPlantComponent } from './components/plants/edit-plant/edit-plant.component';
import { EditProjectComponent } from './components/projects/edit-project/edit-project.component';


const routes: Routes = [
  { path: 'teams', component: TeamsComponent },
  { path: 'clients', component: ClientsComponent },
  { path: 'employee-tasks', component: EmployeeTasksComponent },
  { path: 'employees', component: EmployeesComponent },
  { path: 'plants', component: PlantsComponent },
  { path: 'projects', component: ProjectsComponent },


  { path: 'teams/add', component: AddComponent },
  { path: 'clients/add-client', component: AddClientComponent },
  { path: 'employee-tasks/add-employee-task', component: AddEmployeeTaskComponent },
  { path: 'employees/add-employee', component: AddEmployeeComponent },
  { path: 'plants/add-plant', component: AddPlantComponent },
  { path: 'projects/add-project', component: AddProjectComponent },


  { path: 'teams/edit/:id', component: EditComponent },
  { path: 'clients/edit-client/:id', component: EditClientComponent },
  { path: 'employee-tasks/edit-employee-task/:id', component: EditEmployeeTaskComponent },
  { path: 'employees/edit-employee/:id', component: EditEmployeeComponent },
  { path: 'plants/edit-plant/:id', component: EditPlantComponent },
  { path: 'projects/edit-project/:id', component: EditProjectComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
