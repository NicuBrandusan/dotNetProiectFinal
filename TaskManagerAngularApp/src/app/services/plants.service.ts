import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { API_URL } from '../constants';
import { Plant } from '../models/plant';


@Injectable({
  providedIn: 'root'
})
export class PlantsService {

  constructor(private httpClient: HttpClient) { }
  
  getPlants() {
    return this.httpClient.get<Plant[]>(`${API_URL}/plant`);
  }

  filterPlant(name?: string) {
    return this.httpClient.get<Plant[]>(`${API_URL}/plant/filter?name=${name}`);
  }
  addPlant(plant: Plant) {
    return this.httpClient.post<Plant>(`${API_URL}/plant`, plant);
  }

  deletePlant(plant: Plant) {
    return this.httpClient.delete(`${API_URL}/plant/${plant.id}`);
  }

  updatePlant(plant: Plant) {
    return this.httpClient.put<Plant>(`${API_URL}/plant/${plant.id}`, plant);
  }

  getCurrentPlant(plantId: number) {
    return this.httpClient.get(`${API_URL}/plant/${plantId}`);
  }
}