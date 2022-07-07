import { Component, OnInit } from '@angular/core';
import { Project } from 'src/app/models/project';
import { ProjectsService } from 'src/app/services/projects.service';

@Component({
  selector: 'app-sedinte',
  templateUrl: './sedinte.component.html',
  styleUrls: ['./sedinte.component.scss']
})
export class SedinteComponent implements OnInit {

  displayedColumns: string[] = ['name', 'description', 'operations'];
  newProject: Project = {};
  dataSource: Project[] = [];

  searchBy: string = '';

  constructor(private projectsService : ProjectsService) { }

  ngOnInit(): void {
    this.projectsService.getProjects().subscribe((projects: any) => {
      this.dataSource = projects;
    });
  }

  addProject() {
    this.projectsService.addProject(this.newProject).subscribe((project) => {
      this.dataSource = [...this.dataSource, project];
      this.newProject = {};
    });
  }

  deleteProject(project: Project) {
    this.projectsService.deleteProject(project).subscribe(() => {
      this.dataSource = this.dataSource.filter((item) => item.id !== project.id);
    });
  }

  updateProject(project: Project) {
    this.projectsService.updateProject(project).subscribe(() => {
      project.isEditing = false;
      this.dataSource = this.dataSource.map((item) => (item.id === project.id ? project : item));
    });
  }

  filterProject() {
    if(this.searchBy){
      this.projectsService.getProjects().subscribe((activities) => {
         this.dataSource = this.dataSource.filter((item) => 
          item.name?.includes(this.searchBy) || item.name?.includes(this.searchBy))});
      }
    else{
      this.projectsService.getProjects().subscribe((projects) => { 
        this.dataSource = projects;});
      }
    }

    goToSedintaDetail(project: Project) {
      //[routerLink]="'/activities/details/{{element.id}}'"
      window.location.href="http://localhost:4200/sedinte/details-sedinta/" + project.id;
     }
     
     goToSedintaEdit(project: Project) {
      //[routerLink]="'/activities/edit/{{element.id}}'"
      window.location.href="http://localhost:4200/projects/edit-project/" + project.id;
     } 

}
