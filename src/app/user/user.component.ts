import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
public name='Rowan Toress';
public email='rowan@gmail.com';
  constructor() { }

  ngOnInit(): void {
  }

}
