import { Component, OnInit } from '@angular/core';
import { EmployeeTask } from 'src/app/models/employeeTask';
import { EmployeeTasksService } from 'src/app/services/employee-tasks.service';

@Component({
  selector: 'app-business',
  templateUrl: './business.component.html',
  styleUrls: ['./business.component.scss']
})
export class BusinessComponent implements OnInit {

  displayedColumns: string[] = ['title', 'duration', 'summary' , 'status', 'operations'];
  newTask: EmployeeTask = {};
  dataSource: EmployeeTask[] = [];

  searchBy: string = '';

  constructor(private employeeTasks : EmployeeTasksService) { }

  ngOnInit(): void {
    this.employeeTasks.getEmployeeTasks().subscribe((employeeTasks: any) => {
      this.dataSource = employeeTasks;
    });
  }

  addEmployeeTask() {
    this.employeeTasks.addEmployeeTasks(this.newTask).subscribe((employeeTask) => {
      this.dataSource = [...this.dataSource, employeeTask];
      this.newTask = {};
    });
  }

  deleteEmployeeTask(employeeTask: EmployeeTask) {
    this.employeeTasks.deleteEmployeeTasks(employeeTask).subscribe(() => {
      this.dataSource = this.dataSource.filter((item) => item.id !== employeeTask.id);
    });
  }

  updateEmployeeTask(employeeTask: EmployeeTask) {
    this.employeeTasks.updateEmployeeTasks(employeeTask).subscribe(() => {
      employeeTask.isEditing = false;
      this.dataSource = this.dataSource.map((item) => (item.id === employeeTask.id ? employeeTask : item));
    });
  }

  filterEmployeeTask() {
    if(this.searchBy){
      this.employeeTasks.getEmployeeTasks().subscribe((employeeTasks) => {
         this.dataSource = this.dataSource.filter((item) => 
          item.title?.includes(this.searchBy) || item.duration===Number(this.searchBy) || item.summary?.includes(this.searchBy) || item.status?.includes(this.searchBy) )});
      }
    else{
      this.employeeTasks.getEmployeeTasks().subscribe((employeeTasks) => { 
        this.dataSource = employeeTasks;});
      }
    }

    goToBusinessDetail(employeeTask: EmployeeTask) {
      //[routerLink]="'/activities/details/{{element.id}}'"
      window.location.href="http://localhost:4200/business/details/" + employeeTask.id;
     }
     
     goToBusinessEdit(employeeTask: EmployeeTask) {
      //[routerLink]="'/activities/edit/{{element.id}}'"
      window.location.href="http://localhost:4200/business/edit-business/" + employeeTask.id;
     } 


}
