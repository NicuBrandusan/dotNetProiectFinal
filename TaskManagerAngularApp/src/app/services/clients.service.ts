import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { API_URL } from '../constants';
import { Client } from '../models/client';

@Injectable({
  providedIn: 'root'
})
export class ClientsService {

  constructor(private httpClient: HttpClient) { }
  
  getClients() {
    return this.httpClient.get<Client[]>(`${API_URL}/client`);
  }

  filterClient(name?: string) {
    return this.httpClient.get<Client[]>(`${API_URL}/client/filter?name=${name}`);
  }
  addClient(client: Client) {
    return this.httpClient.post<Client>(`${API_URL}/client`, client);
  }

  deleteClient(client: Client) {
    return this.httpClient.delete(`${API_URL}/client/${client.id}`);
  }

  updateClient(client: Client) {
    return this.httpClient.put<Client>(`${API_URL}/client/${client.id}`, client);
  }

  getCurrentClient(clientId: number) {
    return this.httpClient.get(`${API_URL}/client/${clientId}`);
  }
}
