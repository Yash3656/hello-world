import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmailService {

  constructor(private http: HttpClient) { }

  getProjects():Observable<any>{
    return this.http.get('http://localhost:3001/users');
  }
  updateProjects(item:any,desc:any):Observable<any>{
    const shipmentUrl = `${'http://localhost:3001/users'}/${item.id}`;
    return this.http.put<any>(shipmentUrl,{
      
      id:item.id,
      name:item.name,
      age:item.age,
      description : desc
    });
}
}
