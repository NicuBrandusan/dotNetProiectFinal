import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import {Router} from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { Project } from 'src/app/models/project';
import { ProjectsService } from 'src/app/services/projects.service';

@Component({
  selector: 'app-edit-project',
  templateUrl: './edit-project.component.html',
  styleUrls: ['./edit-project.component.scss']
})
export class EditProjectComponent implements OnInit {

  id!: number;
  dataSource: Project[] = [];
  foundProject!: Project;
  constructor(
    private formBuilder: FormBuilder,
    private projectsService: ProjectsService, 
    private _snackBar: MatSnackBar,
    // private router: Router,
    private router: ActivatedRoute,
  ) {}

  ngOnInit(): void {
    // console.log(this.router.snapshot.params['id'])
    this.id = this.router.snapshot.params['id'];
    console.log(this.id);
    this.projectsService.getCurrentProject(this.id).subscribe((project) => { this.foundProject = project;});
    console.log(this.foundProject);
  }

  projectForm = this.formBuilder.group
  ({
    name: ['', [Validators.required, Validators.minLength(3)]],
    description: ['', [Validators.required]],
    // client: ['', [Validators.required]],
    // plant: ['', [Validators.required]],

  });

  get name() {
     return this.projectForm.get('name'); }
  get description() {
     return this.projectForm.get('description'); }
  // get client() {
  //    return this.projectForm.get('client'); }
  // get plant() {
  //    return this.projectForm.get('plant'); }
  
  onSubmit(foundProject: Project) {
    this.projectsService.updateProject(foundProject).subscribe(() => {
      this._snackBar.open("Updated successfully!", "Ok", {
        verticalPosition: 'top',
        duration: 6 * 1000,
      });

      this.projectForm.reset();
    });
  }
}
