import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import {Router, ActivatedRoute, ParamMap} from '@angular/router';
import { switchMap } from 'rxjs';
import { EmployeeTasksService } from 'src/app/services/employee-tasks.service';

@Component({
  selector: 'app-add-employee-task',
  templateUrl: './add-employee-task.component.html',
  styleUrls: ['./add-employee-task.component.scss']
})
export class AddEmployeeTaskComponent implements OnInit {

  constructor
  (
    private formBuilder: FormBuilder,
    private employeeTasksService: EmployeeTasksService, 
    private _snackBar: MatSnackBar,
    private router: Router,
  ) { }

  ngOnInit(): void {
  }

  employeeTaskForm = this.formBuilder.group
  ({
    title: ['', [Validators.required]],
    duration: ['', [Validators.required]],
    summary: ['', [Validators.required]],
    status: ['', [Validators.required]],
    // employee: ['', [Validators.required]],

  });

  get title() {
     return this.employeeTaskForm.get('title'); }
  get duration() {
     return this.employeeTaskForm.get('duration'); }
  get summary() {
      return this.employeeTaskForm.get('summary'); }
  get status() {
      return this.employeeTaskForm.get('status'); }
  // get employee() {
  //     return this.employeeTaskForm.get('employee'); }
 
  
  onSubmit() {
    this.employeeTasksService.addEmployeeTasks(this.employeeTaskForm.value).subscribe((employeeTask) => {
      this._snackBar.open("Added successfully!", "Ok", {
        verticalPosition: 'top',
        duration: 6 * 1000,
      });

      this.employeeTaskForm.reset();

    });
  }

}
