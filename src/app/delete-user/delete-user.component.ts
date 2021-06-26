import { Component, OnInit } from "@angular/core";
import { ApiService } from "../APICalls/api.service";
import { ActivatedRoute } from "@angular/router";
import { ToastrService } from "ngx-toastr";

@Component({
  selector: "app-delete-user",
  templateUrl: "./delete-user.component.html",
  styleUrls: ["./delete-user.component.css"],
})
export class DeleteUserComponent implements OnInit {
  constructor(
    private api: ApiService,
    private router: ActivatedRoute,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {
    // this.api.deleteUser(this.router.snapshot.params.id).subscribe((res:any)=>{
    //   alert("User Deleted successfully");
    //     this.api.getUser();
    // })
  }

  deleteUser(user: any) {
    console.log("-----", user);
    this.api.deleteUser(user).subscribe((res: any) => {
      this.toastr.error("User deleted successfully...", "title", {
        timeOut: 1000,
      });

      window.location.reload();
    });
  }
}
