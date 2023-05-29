
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Service, ServiceResponse } from './service';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
private apiUrl = 'http://web-app-loadbalancer-1986901367.us-west-2.elb.amazonaws.com/dentalService';
  
    constructor(private http:HttpClient) {
     }
  
    create(service: Service): Observable<Service> {
      // testing
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

    delete(id: string): Observable<object> {
      return this.http.delete(
        this.apiUrl + '/' + id
      );
    }

    edit(id: number, service: Service): Observable<Service> {
      return this.http.put<Service>(this.apiUrl + '/' + id, service);
    }  
}