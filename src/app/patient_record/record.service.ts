import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Record, RecordRequest, RecordResponse } from "./record";

@Injectable({
    providedIn: 'root'
  })
  export class RecordService {
  
    private apiUrl = 'http://web-app-loadbalancer-66924697.us-west-2.elb.amazonaws.com/record';
    
  
    constructor(private http:HttpClient) {
    }
  
    create(record: RecordRequest): Observable<Record> {
      return this.http.post<Record>(this.apiUrl, record);
    }
  
    findAll(searchTerm: string = "", pageNumber: number = 0, pageSize?: number, sortKey?: string): Observable<RecordResponse> {
      return this.http.get<RecordResponse>(
        this.apiUrl + 
        "?searchTerm=" + searchTerm +
        "&pageNo=" + (Number.isInteger(pageNumber) ? pageNumber : "") +
        "&pageSize=" + (pageSize ? pageSize : "")
        );
    }
  
    // delete(id: string): Observable<object> {
    //   return this.http.delete(
    //     this.apiUrl + '/' + id
    //   );
    // }
  
    // get(id: number): Observable<Appointment> {
    //   return this.http.get<Appointment>(this.apiUrl + '/' + id);
    // }
  
    // edit(id: number, appointment: Appointment): Observable<Appointment> {
    //   return this.http.put<Appointment>(this.apiUrl + '/' + id, appointment);
    // }  
  }