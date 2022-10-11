import { Component, ɵsetAllowDuplicateNgModuleIdsForTest } from '@angular/core';
import { FormBuilder, FormGroup,FormControl  } from '@angular/forms';
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
  var1 :any;
  p1:any;
  id1:any;
  project:any;
  empDetail !: FormGroup;
 
  constructor(private formBuilder : FormBuilder, private emailServie: EmailService){

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

  this.empDetail = this.formBuilder.group({
    id : [''],
    name : [''],
    desc : [''],
    age: [''],
  });

  this.project = {
    id : [''],
    name : [''],
    description : [''],
    age: [''],
  };

  //this.getAllProject();
  // this.emailServie.getProjects().subscribe(data => {
  //   this.projects = data;

  // })
 
  // console.log('ngOnInit')
  // this.http.get('http://localhost:4000/users').subscribe((users: UserInterface[]) => {
  //   console.log('res',users);
  //   this.users = users;
  // })

}
// getProjects(){
//   this.emailServie.getProjects().subscribe(data => {
//     this.projects = data;
//   })
// }

//   getProducts(item:any){
// //   this.dialog.open(UserDialog, {
// //     height:'400px',
// //     width:'400px'
// // // }
//     this.desc = prompt("Enter description: ");
//     this.id1 =item.id;
//    // alert(this.id1)
//     this.emailServie.updateProjects(item).subscribe((response:any) => {
//       console.log(response);
//       this.emailServie.getProjects();
//     });
//        window.location.href = "/";

//     // this.emailServie.getProjects().subscribe(data => {
//     //   this.projects = data;
//     // })

// //     this.var1 = document.querySelectorAll('a');
// //     this.id1 = id;
// //   for(let a1 of this.var1)
// //   {
// //     a1.addEventListener('click',this.changesome(this.id1));
// //   }
   

//     //alert(this.desc);
// }

// changedesc(){

  
//  }


// changesome(idd:any){
//   this.p1 = document.querySelectorAll('p');
//   for(let p of this.p1){
//     if(p.innerText == ''){
//       p.innerText = this.desc;
//     }
//   }
  
//}



addproject() {
  //console.log(this.empDetail);
  console.log(this.project);
  this.project.id = this.empDetail.value.id;
  this.project.name = this.empDetail.value.name;
 // this.project.email = this.empDetail.value.email;
  this.project.description = this.empDetail.value.desc;
  this.project.age = this.empDetail.value.age;
  

  this.emailServie.addProject(this.project).subscribe(res=>{
      this.getAllProject();
      //alert("Employee Added Successfully");
  },err=>{
      console.log(err);
  });

}

getAllProject(){
  this.emailServie.getProjects().subscribe(res=>{
    this.projects = res;
},err=>{
  console.log("error while fetching data.")
});
}

viewproject(){
  this.getAllProject();
}

changeproject(empDetail:any){
  
  this.project.id = this.empDetail.value.id;
  this.project.description = this.empDetail.value.desc;
  this.project.name = this.empDetail.value.name;
  this.project.age = this.empDetail.value.age;
  this.emailServie.updateProjects(this.project).subscribe((response:any) => {
    console.log(response);
    this.emailServie.getProjects();
  });
     window.location.href = "/";
}
}