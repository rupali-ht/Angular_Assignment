import { Component, OnInit } from "@angular/core";
import { UserModel } from "../add-user/adduser.model";
import { ApiService } from "../APICalls/api.service";
import { ActivatedRoute } from "@angular/router";
import { FormControl, FormGroup } from "@angular/forms";
import { ToastrService } from "ngx-toastr";
import "../../../src/styles.css";

@Component({
  selector: "app-edit-user",
  templateUrl: "./edit-user.component.html",
  styleUrls: ["./edit-user.component.css"],
})
export class EditUserComponent implements OnInit {
  editUser = new FormGroup({
    firstName: new FormControl(""),
    email: new FormControl(""),
    phone: new FormControl(""),
    role: new FormControl(""),
    status: new FormControl(""),
    password: new FormControl(""),
    confirmPassword: new FormControl(""),
  });

  constructor(
    private api: ApiService,
    private router: ActivatedRoute,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {
    console.log(this.router.snapshot.params.id);
    this.api
      .getCurrentUser(this.router.snapshot.params.id)
      .subscribe((result: any) => {
        console.log("------" + result);
        this.editUser = new FormGroup({
          firstName: new FormControl(result["firstName"]),
          email: new FormControl(result["email"]),
          phone: new FormControl(result["phone"]),
          role: new FormControl(result["role"]),
          status: new FormControl(result["status"]),
          password: new FormControl(result["password"]),
          confirmPassword: new FormControl(result["confirmPassword"]),
        });
      });
  }

  updateUser() {
    this.api
      .updateUser(this.router.snapshot.params.id, this.editUser.value)
      .subscribe((result: any) => {
        this.toastr.success("updated successfully", "title", {
          timeOut: 1000,
        });

        this.editUser = new FormGroup({
          firstName: new FormControl(""),
          email: new FormControl(""),
          phone: new FormControl(""),
          role: new FormControl(""),
          status: new FormControl(""),
          password: new FormControl(""),
          confirmPassword: new FormControl(""),
        });
      });
  }
}
