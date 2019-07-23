import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './component/login/login.component';
import { RegisterComponent } from './component/register/register.component'; 
import { ReactiveFormsModule } from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field'; 
import {MatButtonModule} from '@angular/material/button'; 
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar'; 
import {MatIconModule} from '@angular/material/icon'; 
import {MatInputModule} from '@angular/material/input'; 
import {MatCardModule} from '@angular/material/card';
import {FormsModule} from '@angular/forms';
import {MatDividerModule} from '@angular/material/divider'
import {MatSnackBarModule} from '@angular/material/snack-bar'; 
import { HttpService } from './services/http.service';
import { ForgetComponent } from './component/forget/forget.component';
import { ResetpasswordComponent } from './component/resetpassword/resetpassword.component';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import {MatExpansionModule}from '@angular/material/expansion'
import { FlexLayoutModule } from "@angular/flex-layout";
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatListModule} from '@angular/material/list';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';

import {MatGridListModule} from '@angular/material/grid-list';

import {MatMenuModule} from '@angular/material/menu';
import { CreatenoteComponent } from './component/createnote/createnote.component';
import { GetnoteComponent } from './component/getnote/getnote.component';
import { IconComponent } from './component/icon/icon.component';
import { TrashComponent } from './component/trash/trash.component';
import { ArchiveComponent } from './component/archive/archive.component';
import {MatDialogModule} from '@angular/material/dialog';
import { UpdatenoteComponent } from './component/updatenote/updatenote.component';






@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    ForgetComponent,
    ResetpasswordComponent,
    DashboardComponent,
    CreatenoteComponent,
    GetnoteComponent,
    IconComponent,
    TrashComponent,
    ArchiveComponent,
    UpdatenoteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatButtonModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatInputModule,
    MatCardModule,
    HttpClientModule,
    MatSnackBarModule,
    FormsModule,
    MatDividerModule,
    MatExpansionModule,
    FlexLayoutModule,
    MatSidenavModule,
    MatTooltipModule,
    MatListModule,
    MatSlideToggleModule,
    MatMenuModule,
    MatGridListModule,
    MatDialogModule
     
  ],
  entryComponents:[
    UpdatenoteComponent
  ],
  providers: [HttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
