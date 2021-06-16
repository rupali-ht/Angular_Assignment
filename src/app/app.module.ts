import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// import { DemoComponent } from './demo/demo.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import  {MatSidenavModule} from '@angular/material/sidenav';
import  {MatIconModule} from '@angular/material/icon';
import  {MatListModule} from '@angular/material/list';
import  {MatMenuModule} from '@angular/material/menu';
import  {MatToolbarModule} from '@angular/material/toolbar';

import { HeaderComponent } from './header/header.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UserComponent } from './user/user.component';
import { MatDividerModule } from '@angular/material/divider';





@NgModule({
  declarations: [
    AppComponent,
    // DemoComponent,
    SidenavComponent,
    HeaderComponent,
    DashboardComponent,
    UserComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatMenuModule,
    MatToolbarModule,
    MatDividerModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
