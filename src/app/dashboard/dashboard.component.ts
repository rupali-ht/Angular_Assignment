import { Component, OnInit } from '@angular/core';
import { ApiService } from '../APICalls/api.service';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  users:any;
  ActiveCount:any;
   InActiveCount:any;

   constructor(private api:ApiService) { }


  ngOnInit(): void {
    this.getAllUser();
  }

  getAllUser(){
    this.api.getUser()
    .subscribe((res:any)=>{
      this.users=res;
      this.ActiveCount=this.users.filter((user:any)=>user.status === 'active');
      this.InActiveCount=this.users.filter((user:any)=>user.status === 'inactive')

    })
  }
  

}
