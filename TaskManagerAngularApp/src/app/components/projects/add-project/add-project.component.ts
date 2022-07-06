import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import {Router, ActivatedRoute, ParamMap} from '@angular/router';
import { switchMap } from 'rxjs';
import { ProjectsService } from 'src/app/services/projects.service';

@Component({
  selector: 'app-add-project',
  templateUrl: './add-project.component.html',
  styleUrls: ['./add-project.component.scss']
})
export class AddProjectComponent implements OnInit {

  constructor
  (
    private formBuilder: FormBuilder,
    private projectsService: ProjectsService, 
    private _snackBar: MatSnackBar,
    private router: Router,
  ) { }

  ngOnInit(): void {
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
  
  onSubmit() {
    this.projectsService.addProject(this.projectForm.value).subscribe((project) => {
      this._snackBar.open("Added successfully!", "Ok", {
        verticalPosition: 'top',
        duration: 6 * 1000,
      });

      this.projectForm.reset();

    });
  }

}