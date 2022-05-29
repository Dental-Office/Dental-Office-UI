import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Appointment, AppointmentResponse } from './appointment';

@Injectable({
  providedIn: 'root'
})
export class AppointmentService {

  private apiUrl = 'http://localhost:8080/appointment';

  constructor(private http:HttpClient) {
  }

  create(appointment: Appointment): Observable<Appointment> {
    return this.http.post<Appointment>(this.apiUrl, appointment);
  }

  findAll(searchTerm: string = "", pageNumber: number = 0, pageSize?: number, sortKey?: string): Observable<AppointmentResponse> {
    return this.http.get<AppointmentResponse>(
      this.apiUrl + 
      "?searchTerm=" + searchTerm +
      "&pageNo=" + (Number.isInteger(pageNumber) ? pageNumber : "") +
      "&pageSize=" + (pageSize ? pageSize : "") + 
      "&sort=" +  (sortKey ? sortKey : "")
      );
  }

  delete(id: string): Observable<object> {
    return this.http.delete(
      this.apiUrl + '/' + id
    );
  }

  get(id: number): Observable<Appointment> {
    return this.http.get<Appointment>(this.apiUrl + '/' + id);
  }
}