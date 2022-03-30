import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthComponent } from './auth/auth.component';
import { RegComponent } from './reg/reg.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {ReactiveFormsModule} from "@angular/forms";
import { DashboardComponent } from './dashboard/dashboard.component';
import {AuthGuard} from "./auth.guard";
import {BaseInterceptor} from "./base.interceptor";
import { TableComponent } from './table/table.component';
import { AddgroupComponent } from './addgroup/addgroup.component';
import { TableItemComponent } from './table-item/table-item.component';
import {UserService} from "./service/user.service";
import {AddTsComponent} from "./add-ts/add-ts.component";
import { EditTsComponent } from './edit-ts/edit-ts.component';
import { EditGroupComponent } from './edit-group/edit-group.component';

@NgModule({
  declarations: [
    AppComponent,
    AuthComponent,
    RegComponent,
    DashboardComponent,
    TableComponent,
    AddgroupComponent,
    TableItemComponent,
    AddTsComponent,
    EditTsComponent,
    EditGroupComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        ReactiveFormsModule,
    ],
  providers: [AuthGuard, UserService, {provide: HTTP_INTERCEPTORS, useClass: BaseInterceptor, multi: true},],
  bootstrap: [AppComponent]
})
export class AppModule { }
