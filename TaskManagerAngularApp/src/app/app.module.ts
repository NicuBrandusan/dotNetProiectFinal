import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ClientsComponent } from './components/clients/clients.component';
import { EmployeesComponent } from './components/employees/employees.component';
import { EmployeeTasksComponent } from './components/employee-tasks/employee-tasks.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { PlantsComponent } from './components/plants/plants.component';
import { TeamsComponent } from './components/teams/teams.component';
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


import { HttpClientModule} from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule} from '@angular/material/input'; 
import { MatCardModule} from '@angular/material/card'; 
import { MatTableModule} from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatTabsModule} from '@angular/material/tabs'; 
import { MatMenuModule} from '@angular/material/menu';
import { MatSidenavModule} from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule} from '@angular/material/list';
import { NgbdSortableHeader } from './directives/sortable.directive';
import { DownloadFileService } from './download-file.service';




@NgModule({
  declarations: [
    AppComponent,

    TeamsComponent,
    AddComponent,
    EditComponent,

    ClientsComponent,
    AddClientComponent,
    EditClientComponent,

    EmployeesComponent,
    AddEmployeeComponent,
    EditEmployeeComponent,

    EmployeeTasksComponent,
    AddEmployeeTaskComponent,
    EditEmployeeTaskComponent,

    ProjectsComponent,
    AddProjectComponent,
    EditProjectComponent,

    PlantsComponent,
    AddPlantComponent,
    EditPlantComponent,

    NgbdSortableHeader,
      FurnizoriComponent,
      AddFurnizorComponent,
      EditFurnizorComponent,
      SedinteComponent,
      AddSedintaComponent,
      EditSedintaComponent,
      BusinessComponent,
      EditBusinessComponent,
      AddBusinessComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,

    MatInputModule,
    MatCardModule,
    MatTableModule,
    MatButtonModule,
    MatIconModule,
    MatSnackBarModule,
    MatTabsModule,
    MatMenuModule,
    MatSidenavModule,
    MatToolbarModule,
    MatListModule,

  ],
  providers: [DownloadFileService],
  bootstrap: [AppComponent]
})
export class AppModule { }
