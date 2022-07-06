import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { API_URL } from '../constants';
import { Project } from '../models/project';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {

  constructor(private httpClient: HttpClient) { }
  
  getProjects() {
    return this.httpClient.get<Project[]>(`${API_URL}/project`);
  }

  filterProject(name?: string) {
    return this.httpClient.get<Project[]>(`${API_URL}/project/filter?name=${name}`);
  }
  addProject(project: Project) {
    return this.httpClient.post<Project>(`${API_URL}/project`, project);
  }

  deleteProject(project: Project) {
    return this.httpClient.delete(`${API_URL}/project/${project.id}`);
  }

  updateProject(project: Project) {
    return this.httpClient.put<Project>(`${API_URL}/project/${project.id}`, project);
  }

  getCurrentProject(projectId: number) {
    return this.httpClient.get(`${API_URL}/project/${projectId}`);
  }
}