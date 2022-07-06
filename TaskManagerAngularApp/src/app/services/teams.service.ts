import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { API_URL } from '../constants';
import { Team } from '../models/team';


@Injectable({
  providedIn: 'root'
})
export class TeamsService {

  constructor(private httpClient: HttpClient) { }

  getTeams() {
    return this.httpClient.get<Team[]>(`${API_URL}/team`);
  }

  filterTeam(department?: string) {
    return this.httpClient.get<Team[]>(`${API_URL}/team/filter?department=${department}`);
  }
  addTeam(team: Team) {
    return this.httpClient.post<Team>(`${API_URL}/team`, team);
  }

  deleteTeam(team: Team) {
    return this.httpClient.delete(`${API_URL}/team/${team.id}`);
  }

  updateTeam(team: Team) {
    return this.httpClient.put<Team>(`${API_URL}/team/${team.id}`, team);
  }

  getCurrentTeam(teamId: number) {
    return this.httpClient.get(`${API_URL}/team/${teamId}`);
  }
}
