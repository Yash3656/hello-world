import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmailService {

  constructor(private http: HttpClient) { }

  getProjects():Observable<any>{
    return this.http.get('http://localhost:3001/projects');
  }
  updateProjects(project:any):Observable<any>{
    const shipmentUrl = `${'http://localhost:3001/projects'}/${project.id}`;
    return this.http.put<any>(shipmentUrl,{
      
      id:project.id,
      name:project.name,
      age:project.age,
      description : project.description
    });
}



addProject(project:any):Observable<any>{
  return this.http.post<any>('http://localhost:3001/projects',project);
}

}
