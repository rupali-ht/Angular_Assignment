import { Component, OnInit } from '@angular/core';
import { ApiService } from '../APICalls/api.service';

@Component({
  selector: 'app-card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.css']
})
export class CardListComponent implements OnInit {

  userData :any;
  firstName:any;
  p:number=1;
  user:any;
  admin:any;
  constructor(private api:ApiService) { }

  ngOnInit(): void {
    this.getAllUser();
  }

  getAllUser(){
    this.api.getUser()
    .subscribe((res:any)=>{
      this.userData=res;
    })
  }
  Search(){
    if(this.firstName==""){
      this.ngOnInit();
    }else{
      this.userData=this.userData.filter((res:any)=>{
        return res.firstName.toLocaleLowerCase().match(this.firstName.toLocaleLowerCase())
      })
    }
  }

  filterByUser(){
    if(this.user==""){
      this.ngOnInit();
    }else{
      this.userData=this.userData.filter((res:any)=>{
       return res.role ==='user';
      }) 
    }
 }

 filterByAdmin(){
   if(this.admin==""){
     this.ngOnInit();
   }else{
     this.userData=this.userData.filter((res:any)=>{
      return res.role ==='admin'
     })
   }
 }

  key:string ='id';
  reverse :boolean =false;
  sort(key:any)
  {
    this.key=key;
    this.reverse=!this.reverse;
  }
}
