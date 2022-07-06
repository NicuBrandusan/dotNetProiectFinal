import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import {Router} from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { EmployeeTask } from 'src/app/models/employeeTask';
import { EmployeeTasksService } from 'src/app/services/employee-tasks.service';

@Component({
  selector: 'app-edit-employee-task',
  templateUrl: './edit-employee-task.component.html',
  styleUrls: ['./edit-employee-task.component.scss']
})
export class EditEmployeeTaskComponent implements OnInit {

  id!: number;
  dataSource: EmployeeTask[] = [];
  foundEmployeeTask!: EmployeeTask;
  constructor(
    private formBuilder: FormBuilder,
    private employeeTasksService: EmployeeTasksService, 
    private _snackBar: MatSnackBar,
    // private router: Router,
    private router: ActivatedRoute,
  ) {}

  ngOnInit(): void {
    // console.log(this.router.snapshot.params['id'])
    this.id = this.router.snapshot.params['id'];
    console.log(this.id);
    this.employeeTasksService.getCurrentEmployeeTask(this.id).subscribe((employeeTask) => { this.foundEmployeeTask = employeeTask;});
    console.log(this.foundEmployeeTask);
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
  
  onSubmit(foundEmployeeTask: EmployeeTask) {
    this.employeeTasksService.updateEmployeeTasks(foundEmployeeTask).subscribe(() => {
      this._snackBar.open("Updated successfully!", "Ok", {
        verticalPosition: 'top',
        duration: 6 * 1000,
      });

      this.employeeTaskForm.reset();
    });
  }
}
