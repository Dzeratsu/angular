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

@NgModule({
  declarations: [
    AppComponent,
    AuthComponent,
    RegComponent,
    DashboardComponent,
    TableComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        ReactiveFormsModule,
    ],
  providers: [AuthGuard, {provide: HTTP_INTERCEPTORS, useClass: BaseInterceptor, multi: true},],
  bootstrap: [AppComponent]
})
export class AppModule { }
