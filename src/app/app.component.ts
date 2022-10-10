import { Component } from '@angular/core';
//import {HttpClient} from '@angular/common/http';
//import {UserInterfaces} from 'src/app/user_interface';
//import {MatDialog} from '@angular/material';
import { EmailService } from './email.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  projects: any;
  desc: any;
  constructor(private emailServie: EmailService){

  }
//   title = 'Angular App';
//   courses = [ 1,2,3];
//   viewmode ='anything';
//   itemlist = [
//     {id:1,name:"item1"},
//     {id:3,name:"item2"},
//     {id:3,name:"item3"}
// ]
  // users: UserInterfaces[]=[];

// onAdd(){
//   this.itemlist.push({id:4, name: "item4"});
// }

// onRemove(item:any){
//   let index = this.itemlist.indexOf(item);
//   this.itemlist.splice(index , 1)
// }

// onChange(item:any){
//   item.name = 'Updated';
// }

ngOnInit():void{

  this.emailServie.getProjects().subscribe(data => {
    this.projects = data;
  })
  // console.log('ngOnInit')
  // this.http.get('http://localhost:4000/users').subscribe((users: UserInterface[]) => {
  //   console.log('res',users);
  //   this.users = users;
  // })

}
  getProducts(){
//   this.dialog.open(UserDialog, {
//     height:'400px',
//     width:'400px'
// }
    this.desc = prompt("Enter description: ")
    //alert(this.desc);
}
}
