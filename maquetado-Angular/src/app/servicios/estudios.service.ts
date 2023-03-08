import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EstudiosService {
url = 'http://localhost:8080/estudios/'
  constructor(private httpClient:HttpClient) { }

  public list(): Observable<Estudios[]>{
    return this.httpClient.get<Estudios[]>(this.url + 'lista');
  }

  public getById(id: number):Observable<Estudios>{
    return this.httpClient.get<Estudios>(this.url + `ver/${id}`);
  }

  public create(estudios: Estudios):Observable<any>{
    return this.httpClient.post<any>(this.url + 'crear', estudios);
  }

  public delete(id:number):Observable<any>{
    return this.httpClient.delete<any>(this.url + `borrar/${id}`);
  }

  public update(estudios: Estudios):Observable<any>{
    return this.httpClient.put<any>(this.url + 'update', estudios);
  }
}
