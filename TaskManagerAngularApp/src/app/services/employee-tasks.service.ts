import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { API_URL } from '../constants';
import { EmployeeTask } from '../models/employeeTask';

@Injectable({
  providedIn: 'root'
})
export class EmployeeTasksService {

  constructor(private httpClient: HttpClient) { }
  
  getEmployeeTasks() {
    return this.httpClient.get<EmployeeTask[]>(`${API_URL}/employeeTask`);
  }

  filterEmployeeTasks(title?: string) {
    return this.httpClient.get<EmployeeTask[]>(`${API_URL}/employeeTask/filter?title=${title}`);
  }
  addEmployeeTasks(employeeTask: EmployeeTask) {
    return this.httpClient.post<EmployeeTask>(`${API_URL}/employeeTask`, employeeTask);
  }

  deleteEmployeeTasks(employeeTask: EmployeeTask) {
    return this.httpClient.delete(`${API_URL}/employeeTask/${employeeTask.id}`);
  }

  updateEmployeeTasks(employeeTask: EmployeeTask) {
    return this.httpClient.put<EmployeeTask>(`${API_URL}/employeeTask/${employeeTask.id}`, employeeTask);
  }

  getCurrentEmployeeTask(employeeTaskId: number) {
    return this.httpClient.get(`${API_URL}/employeeTask/${employeeTaskId}`);
  }
}
