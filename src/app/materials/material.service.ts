import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Material, MaterialResponse } from './material';

@Injectable({
  providedIn: 'root'
})
export class MaterialService {

  private apiUrl = 'http://localhost:8080/material';
  
    constructor(private http:HttpClient) {
     }
  
    create(material: Material): Observable<Material> {
      return this.http.post<Material>(this.apiUrl, material);
    }
  
    findAll(searchTerm: string = "", pageNumber: number = 0, pageSize?: number, sortKey?: string): Observable<MaterialResponse> {
      return this.http.get<MaterialResponse>(
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
  
    get(id: number): Observable<Material> {
      return this.http.get<Material>(this.apiUrl + '/' + id);
    }
  
    edit(id: number, material: Material): Observable<Material> {
      return this.http.put<Material>(this.apiUrl + '/' + id, material);
    }  
}
