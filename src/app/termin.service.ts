import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Termin } from './Termin';

@Injectable({
  providedIn: 'root'
})
export class TerminService {

  private apiUrl = 'http://localhost:8080/termin';

  constructor(private http:HttpClient) {
  }

  createTermin(termin: Termin): Observable<Termin> {
    return this.http.post<Termin>(this.apiUrl, termin);
  }
 
}
