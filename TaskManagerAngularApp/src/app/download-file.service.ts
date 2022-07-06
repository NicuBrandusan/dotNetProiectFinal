import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { API_URL } from './constants';

@Injectable({
  providedIn: 'root'
})
export class DownloadFileService {

  constructor(private httpClient: HttpClient) { }

  public downloadFile() {
    return this.httpClient.get(`${API_URL}/employee/export`, {observe: 'response', responseType:'blob'})
  }
}
