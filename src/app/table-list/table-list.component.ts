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
}