import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import {Router} from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { Employee } from 'src/app/models/employee';
import { EmployeesService } from 'src/app/services/employees.service';



@Component({
  selector: 'app-edit-employee',
  templateUrl: './edit-employee.component.html',
  styleUrls: ['./edit-employee.component.scss']
})
export class EditEmployeeComponent implements OnInit {

  id!: number;
  dataSource: Employee[] = [];
  foundEmployee!: Employee;
  constructor(
    private formBuilder: FormBuilder,
    private employeesService: EmployeesService, 
    private _snackBar: MatSnackBar,
    // private router: Router,
    private router: ActivatedRoute,
  ) {}

  ngOnInit(): void {
    // console.log(this.router.snapshot.params['id'])
    this.id = this.router.snapshot.params['id'];
    console.log(this.id);
    this.employeesService.getCurrentEmployee(this.id).subscribe((employee) => { this.foundEmployee = employee;});
    console.log(this.foundEmployee);
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
  
  onSubmit(foundEmployee: Employee) {
    this.employeesService.updateEmployee(foundEmployee).subscribe(() => {
      this._snackBar.open("Updated successfully!", "Ok", {
        verticalPosition: 'top',
        duration: 6 * 1000,
      });

      this.employeeForm.reset();
    });
  }
}
