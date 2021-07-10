import { Component, OnInit ,EventEmitter, Output} from '@angular/core';
import { ApiService } from '../APICalls/api.service';
import '../../../src/styles.css'

@Component({
  selector: 'app-table-list',
  templateUrl: './table-list.component.html',
  styleUrls: ['./table-list.component.css']
})
export class TableListComponent implements OnInit {

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