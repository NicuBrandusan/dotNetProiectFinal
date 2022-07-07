import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TeamsComponent } from './components/teams/teams.component';
import { ClientsComponent } from './components/clients/clients.component';
import { EmployeeTasksComponent } from './components/employee-tasks/employee-tasks.component';
import { EmployeesComponent } from './components/employees/employees.component';
import { PlantsComponent } from './components/plants/plants.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { FurnizoriComponent } from './components/furnizori/furnizori.component';
import { SedinteComponent } from './components/sedinte/sedinte.component';
import { BusinessComponent } from './components/business/business.component';


import { AddComponent } from './components/teams/add/add.component';
import { AddClientComponent } from './components/clients/add-client/add-client.component';
import { AddEmployeeTaskComponent } from './components/employee-tasks/add-employee-task/add-employee-task.component';
import { AddEmployeeComponent } from './components/employees/add-employee/add-employee.component';
import { AddPlantComponent } from './components/plants/add-plant/add-plant.component';
import { AddProjectComponent } from './components/projects/add-project/add-project.component';
import { AddFurnizorComponent } from './components/furnizori/add-furnizor/add-furnizor.component';
import { AddSedintaComponent } from './components/sedinte/add-sedinta/add-sedinta.component';
import { AddBusinessComponent } from './components/business/add-business/add-business.component';


import { EditComponent } from './components/teams/edit/edit.component';
import { EditClientComponent } from './components/clients/edit-client/edit-client.component';
import { EditEmployeeTaskComponent } from './components/employee-tasks/edit-employee-task/edit-employee-task.component';
import { EditEmployeeComponent } from './components/employees/edit-employee/edit-employee.component';
import { EditPlantComponent } from './components/plants/edit-plant/edit-plant.component';
import { EditProjectComponent } from './components/projects/edit-project/edit-project.component';
import { EditFurnizorComponent } from './components/furnizori/edit-furnizor/edit-furnizor.component';
import { EditSedintaComponent } from './components/sedinte/edit-sedinta/edit-sedinta.component';
import { EditBusinessComponent } from './components/business/edit-business/edit-business.component';


const routes: Routes = [
  { path: 'teams', component: TeamsComponent },
  { path: 'clients', component: ClientsComponent },
  { path: 'employee-tasks', component: EmployeeTasksComponent },
  { path: 'employees', component: EmployeesComponent },
  { path: 'plants', component: PlantsComponent },
  { path: 'projects', component: ProjectsComponent },
  { path: 'furnizori', component: FurnizoriComponent },
  { path: 'sedinte', component: SedinteComponent },
  { path: 'business', component: BusinessComponent },


  { path: 'teams/add', component: AddComponent },
  { path: 'clients/add-client', component: AddClientComponent },
  { path: 'employee-tasks/add-employee-task', component: AddEmployeeTaskComponent },
  { path: 'employees/add-employee', component: AddEmployeeComponent },
  { path: 'plants/add-plant', component: AddPlantComponent },
  { path: 'projects/add-project', component: AddProjectComponent },
  { path: 'furnizori/add-furnizor', component: AddFurnizorComponent },
  { path: 'sedinte/add-sedinta', component: AddSedintaComponent },
  { path: 'business/add-business', component: AddBusinessComponent },


  { path: 'teams/edit/:id', component: EditComponent },
  { path: 'clients/edit-client/:id', component: EditClientComponent },
  { path: 'employee-tasks/edit-employee-task/:id', component: EditEmployeeTaskComponent },
  { path: 'employees/edit-employee/:id', component: EditEmployeeComponent },
  { path: 'plants/edit-plant/:id', component: EditPlantComponent },
  { path: 'projects/edit-project/:id', component: EditProjectComponent },
  { path: 'furnizori/edit-furnizor', component: EditFurnizorComponent },
  { path: 'sedinte/edit-sedinta', component: EditSedintaComponent },
  { path: 'business/edit-business', component: EditBusinessComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
