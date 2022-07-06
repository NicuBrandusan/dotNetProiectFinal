import { Component, OnInit } from '@angular/core';
import { DownloadFileService } from 'src/app/download-file.service';
import { Employee } from 'src/app/models/employee';
import { EmployeesService } from 'src/app/services/employees.service';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.scss']
})
export class EmployeesComponent implements OnInit {

  displayedColumns: string[] = ['name', 'age', 'email','phoneNumber', 'operations'];
  newEmployee: Employee = {};
  dataSource: Employee[] = [];

  name: string = '';

  title = 'file-download-task-manager';

  constructor(private employeesService : EmployeesService, private downloadFileService: DownloadFileService) { }

  ngOnInit(): void {
    this.employeesService.getEmployees().subscribe((employee: any) => {
      this.dataSource = employee;
    });
  }

  addEmployee() {
    this.employeesService.addEmployee(this.newEmployee).subscribe((employee) => {
      this.dataSource = [...this.dataSource, employee];
      this.newEmployee = {};
    });
  }

  deleteEmployee(employee: Employee) {
    this.employeesService.deleteEmployee(employee).subscribe(() => {
      this.dataSource = this.dataSource.filter((item) => item.id !== employee.id);
    });
  }

  updateEmployee(employee: Employee) {
    this.employeesService.updateEmployee(employee).subscribe(() => {
      employee.isEditing = false;
      this.dataSource = this.dataSource.map((item) => (item.id === employee.id ? employee : item));
    });
  }

  filterEmployee() {
    if(this.name){
      this.employeesService.getEmployees().subscribe((employee) => {
         this.dataSource = this.dataSource.filter((item) => 
          item.name?.includes(this.name))});
      }
    else{
      this.employeesService.getEmployees().subscribe((employee) => { 
        this.dataSource = employee;});
      }
    }

    goToEmployeeDetail(employee: Employee) {
      //[routerLink]="'/activities/details/{{element.id}}'"
      window.location.href="http://localhost:4200/employees/details/" + employee.id;
     }
     
     goToEmployeeEdit(employee: Employee) {
      //[routerLink]="'/activities/edit/{{element.id}}'"
      window.location.href="http://localhost:4200/employees/edit-employee/" + employee.id;
     } 

     public downloadFile():void {
        this.downloadFileService.downloadFile().subscribe(response => 
          {
            let fileName=response.headers.get('content-disposition')
            ?.split(';')[1].split('=')[1];
            let blob:Blob = response.body as Blob;
            let a = document.createElement('a');
            if (fileName === undefined) {
              fileName = 'employeeData';
            }
            a.download = fileName;
            a.href = window.URL.createObjectURL(blob);
            a.click();
          }

        )
     }

}
