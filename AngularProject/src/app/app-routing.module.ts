import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './component/login/login.component';
import { RegisterComponent } from './component/register/register.component';
import { ForgetComponent } from './component/forget/forget.component';
import { ResetpasswordComponent } from './component/resetpassword/resetpassword.component';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { CreatenoteComponent } from './component/createnote/createnote.component';
import { IconComponent } from './component/icon/icon.component';
import { TrashComponent } from './component/trash/trash.component';
import { ArchiveComponent } from './component/archive/archive.component';
import { RestoreComponent } from './component/restore/restore.component';
import { SearchComponent } from './component/search/search.component';
import { GridlistComponent } from './component/gridlist/gridlist.component';
import { AuthCardService } from './services/auth-card.service';




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
    path:"reset/:token",
    component:ResetpasswordComponent
  },
  
  {
    canActivate:[AuthCardService],
    path:"dashboard",
    component:DashboardComponent,
    children:[
     
      {
        path:"createnote",
        component:CreatenoteComponent
      },
      {
        path:"",
        component:CreatenoteComponent
      },
      {
        path:"search",
        component:SearchComponent
      },
      {
        path:"getTrash",
        component:TrashComponent
      },
      
      {
        path:"getArchive",
        component:ArchiveComponent
      },
      {
        path:"gridlist",
        component:GridlistComponent
      }
      
      
     
    ]
   
  },
  {
    path:"icon",
    component:IconComponent
  },
  {
    path:"trash",
    component:TrashComponent
  },
  {
    path:"archive",
    component:ArchiveComponent
  },
  {
    path:"restore",
    component:RestoreComponent
  },
  // {
  //   path:"search",
  //   component:SearchComponent
  // }
 
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
