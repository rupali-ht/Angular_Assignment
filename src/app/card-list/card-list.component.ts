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
}
