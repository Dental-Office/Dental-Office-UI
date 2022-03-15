import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse} from '@angular/common/http';
import { catchError, Observable, throwError} from 'rxjs';
import { Person } from './Person';

@Injectable({
  providedIn: 'root'
})
export class PersonService {

  private apiUrl = 'http://localhost:3000/persons';

  constructor(private http:HttpClient) {
   }

  postPerson(person: Person): Observable<Person> {
    return this.http.post<Person>(this.apiUrl, person);
  }

  getPersons(): Observable<Person[]> {
    return this.http.get<Person[]>(this.apiUrl)
  }
}


