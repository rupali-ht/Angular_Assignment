import { Component, OnInit } from "@angular/core";
import { UserModel } from "./adduser.model";
import { ApiService } from "../APICalls/api.service";
import { ToastrService } from "ngx-toastr";
import '../../../src/styles.css'

@Component({
  selector: "app-add-user",
  templateUrl: "./add-user.component.html",
  styleUrls: ["./add-user.component.css"],
})
export class AddUserComponent implements OnInit {
  
  userModelObj: UserModel = new UserModel();

  firstName = "";
  email = "";
  phone = "";
  password = "";
  confirmPassword = "";
  role = "";
  status = "";

  constructor(private api: ApiService,private toastr:ToastrService) {}

  ngOnInit(): void {}

  postUserDetails() {
   
    (this.userModelObj.firstName = this.firstName),
      (this.userModelObj.phone = this.phone),
      (this.userModelObj.email = this.email),
      (this.userModelObj.password = this.password),
      (this.userModelObj.confirmPassword = this.confirmPassword),
      (this.userModelObj.role = this.role),
      (this.userModelObj.status = this.status),
      this.api.postUser(this.userModelObj).subscribe(
        (res: any) => {
          console.log(res);
          this.toastr.success('User added successfully...','title',{
            timeOut:1000
          });
          this.firstName = "";
          this.email = "";
          this.phone = "";
          this.password = "";
          this.confirmPassword = "";
          this.role = "";
          this.status = "";
        },
        (err: any) => {
          alert("Something went wrong");
        }
      );
  }
}
