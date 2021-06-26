import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddUserComponent } from './add-user/add-user.component';
import { CardListComponent } from './card-list/card-list.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DeleteUserComponent } from './delete-user/delete-user.component';
import { EditUserComponent } from './edit-user/edit-user.component';
import { TableListComponent } from './table-list/table-list.component';
import { UserComponent } from './user/user.component';

const routes: Routes = [
  {path:"",redirectTo:'user',pathMatch:'full'},
  {path:'dashboard',component:DashboardComponent},
  {path:'user',component:UserComponent},
  {path:'userForm',component:AddUserComponent},
  {path:'tableView',component:TableListComponent},
  {path:'cardView',component:CardListComponent},
  {path:'deleteUser/:id',component:DeleteUserComponent},
  {path:'editUser/:id',component:EditUserComponent}




];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
