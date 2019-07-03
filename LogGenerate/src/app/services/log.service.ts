import { Log } from './../log';
import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';

// @Injectable({
//   providedIn: 'root'
// })

export class LogService {
  url = "http://localhost:8080/api"
  constructor(private http: HttpClient) {  }

  getAllLogs() {
    return this.http.get<any>(`${this.url}/logs`);
  }
  delete(id){
    return this.http.delete<any>(`${this.url}/delete/${id}`);
  }

  generate(log){
    return this.http.post<any>(`${this.url}/create`, log);
  }

  getDate(log){
    return this.http.post<any>(`${this.url}/findate`, log);
  }

  getIp(log){
    return this.http.post<any>(`${this.url}/findip`, log);
  }

  sendFile(file){
    return this.http.post<any>(`${this.url}/fileupload`, file);
  }
}
