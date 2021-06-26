import { Injectable } from "@angular/core";
import { HttpClient, HttpClientModule } from "@angular/common/http";
import { map } from "rxjs/operators";

@Injectable({
  providedIn: "root",
})
export class ApiService {
  URL = "http://localhost:3000/posts";

  constructor(private http: HttpClient) {}

  postUser(data: any) {
    return this.http.post<any>(this.URL, data).pipe(
      map((res: any) => {
        return res;
      })
    );
  }

  getUser() {
    return this.http.get<any>(this.URL).pipe(
      map((res: any) => {
        return res;
      })
    );
  }

  // deleteUser(id: number) {
  //   return this.http.delete<any>(this.URL + id)
  //   .pipe(
  //     map((res: any) => {
  //       return res;
  //     })
  //   );
  // }
  deleteUser(id: number) {
    return this.http.delete<any>(`${this.URL}/${id}`)
  }


  getCurrentUser(id: number) {
    return this.http.get(`${this.URL}/${id}`);
  }

  updateUser(id: number, data: any) {
    return this.http.put<any>(`${this.URL}/${id}`, data);
  }
}
