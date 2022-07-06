import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import {Router, ActivatedRoute, ParamMap} from '@angular/router';
import { switchMap } from 'rxjs';
import { EmployeesService } from 'src/app/services/employees.service';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.scss']
})
export class AddEmployeeComponent implements OnInit {

  constructor
  (
    private formBuilder: FormBuilder,
    private employeesService: EmployeesService, 
    private _snackBar: MatSnackBar,
    private router: Router,
  ) { }

  ngOnInit(): void {
  }

  employeeForm = this.formBuilder.group
  ({
    name: ['', [Validators.required, Validators.minLength(3)]],
    age: ['', [Validators.required]],
    email: ['', [Validators.required]],
    phoneNumber: ['', [Validators.required]],
    // project: ['', [Validators.required]],
  });

  get name() {
     return this.employeeForm.get('name'); }
  get age() {
     return this.employeeForm.get('age'); }
  get email() {
      return this.employeeForm.get('email'); }
  get phoneNumber() {
      return this.employeeForm.get('phoneNumber'); }
  // get project() {
  //     return this.employeeForm.get('project'); }

  
  onSubmit() {
    this.employeesService.addEmployee(this.employeeForm.value).subscribe((employee) => {
      this._snackBar.open("Added successfully!", "Ok", {
        verticalPosition: 'top',
        duration: 6 * 1000,
      });

      this.employeeForm.reset();

    });
  }

}

