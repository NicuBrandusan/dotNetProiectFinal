import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { API_URL } from '../constants';
import { Employee } from '../models/employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeesService {

  constructor(private httpClient: HttpClient) { }
  
  getEmployees() {
    return this.httpClient.get<Employee[]>(`${API_URL}/employee`);
  }

  filterEmployee(name?: string) {
    return this.httpClient.get<Employee[]>(`${API_URL}/employee/filter?name=${name}`);
  }
  addEmployee(employee: Employee) {
    return this.httpClient.post<Employee>(`${API_URL}/employee`, employee);
  }

  deleteEmployee(employee: Employee) {
    return this.httpClient.delete(`${API_URL}/employee/${employee.id}`);
  }

  updateEmployee(employee: Employee) {
    return this.httpClient.put<Employee>(`${API_URL}/employee/${employee.id}`, employee);
  }

  getCurrentEmployee(employeeId: number) {
    return this.httpClient.get(`${API_URL}/employee/${employeeId}`);
  }
}