import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SkillsService {
url = 'http://localhost:8080/skills/'
  constructor(private httpClient:HttpClient) { }

  public list(): Observable<Skills[]>{
    return this.httpClient.get<Skills[]>(this.url + 'lista');
  }

  public getById(id: number):Observable<Skills>{
    return this.httpClient.get<Skills>(this.url + `ver/${id}`);
  }

  public create(skills: Skills):Observable<any>{
    return this.httpClient.post<any>(this.url + 'crear', skills);
  }

  public delete(id:number):Observable<any>{
    return this.httpClient.delete<any>(this.url + `borrar/${id}`);
  }

  public update(skills: Skills):Observable<any>{
    return this.httpClient.put<any>(this.url + 'update', skills);
  }
}
