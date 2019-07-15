import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './component/login/login.component';
import { RegisterComponent } from './component/register/register.component';
import { ForgetComponent } from './component/forget/forget.component';
import { ResetpasswordComponent } from './component/resetpassword/resetpassword.component';
import { DashboardComponent } from './component/dashboard/dashboard.component';


const routes: Routes = [
  {
    path:"login",
    component:LoginComponent
  },
  {
    path:"register",
    component:RegisterComponent
  },
  {
    path:"forget",
    component:ForgetComponent
  },
  {
    path:"userservice/restSetPassword/:data",
    component:ResetpasswordComponent
  },
  {
    path:"dashboard",
    component:DashboardComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
