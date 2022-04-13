import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Patient } from './Patient';

@Injectable({
  providedIn: 'root'
})
export class PatientService {

  private apiUrl = 'http://localhost:8080/patient';

  constructor(private http:HttpClient) {
   }

  postPatient(patient: Patient): Observable<Patient> {
    return this.http.post<Patient>(this.apiUrl, patient);
  }

  getPatients(): Observable<Patient[]> {
    return this.http.get<Patient[]>(this.apiUrl)
  }

  delete(id?: number): Observable<object> {
    return this.http.delete(
      this.apiUrl + '/' + id
    );
  }

 
}


