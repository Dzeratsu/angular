import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AuthComponent} from "./auth/auth.component";
import {RegComponent} from "./reg/reg.component";
import {DashboardComponent} from "./dashboard/dashboard.component";
import {AuthGuard} from "./auth.guard";
import {AddTsComponent} from "./add-ts/add-ts.component"
import {AddgroupComponent} from "./addgroup/addgroup.component";
import {EditTsComponent} from "./edit-ts/edit-ts.component";
import {EditGroupComponent} from "./edit-group/edit-group.component";

const routes: Routes = [
  {path: 'login', component: AuthComponent},
  {path: 'reg', component: RegComponent},
  {path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard], canActivateChild: [AuthGuard],
  children: [
    {path: 'add-transport', component: AddTsComponent},
    {path: 'add-group', component: AddgroupComponent},
    {path: 'edit-ts/:id', component:EditTsComponent, runGuardsAndResolvers: 'paramsOrQueryParamsChange'},
    {path: 'edit-group/:id', component: EditGroupComponent, runGuardsAndResolvers: 'paramsOrQueryParamsChange' }
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
