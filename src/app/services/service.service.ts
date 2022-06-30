
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Service, ServiceResponse } from './service';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
private apiUrl = 'http://localhost:8080/dentalService';
  
    constructor(private http:HttpClient) {
     }
  
    create(service: Service): Observable<Service> {
      return this.http.post<Service>(this.apiUrl, service);
    }
  
    findAll(searchTerm: string = "", pageNumber: number = 0, pageSize?: number, sortKey?: string): Observable<ServiceResponse> {
      return this.http.get<ServiceResponse>(
        this.apiUrl + 
        "?searchTerm=" + searchTerm +
        "&pageNo=" + (Number.isInteger(pageNumber) ? pageNumber : "") +
        "&pageSize=" + (pageSize ? pageSize : "") + 
        "&sort=" +  (sortKey ? sortKey : "")
        );
    }
  
    get(id: number): Observable<Service> {
      return this.http.get<Service>(this.apiUrl + '/' + id);
    }
}