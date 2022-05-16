import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Patient, PatientsResponse } from './Patient';

@Injectable({
  providedIn: 'root'
})
export class PatientService {

  private apiUrl = 'http://localhost:8080/patient';

  constructor(private http:HttpClient) {
   }

  createPatient(patient: Patient): Observable<Patient> {
    return this.http.post<Patient>(this.apiUrl, patient);
  }

  getPatients(searchTerm: string = "", page: number = 0, pageSize?: number): Observable<PatientsResponse> {
    return this.http.get<PatientsResponse>(this.apiUrl + "?searchTerm=" + searchTerm + "&pageNo=" + (Number.isInteger(page) ? page : "") + "&pageSize=" + (pageSize ? pageSize : ""));
  }

  delete(id: number): Observable<object> {
    return this.http.delete(
      this.apiUrl + '/' + id
    );
  }

  getPatient(id: number): Observable<Patient> {
    return this.http.get<Patient>(this.apiUrl + '/' + id);
  }

  editPatient(id: number, patient: Patient): Observable<Patient> {
    return this.http.put<Patient>(this.apiUrl + '/' + id, patient);
  }
  
}


