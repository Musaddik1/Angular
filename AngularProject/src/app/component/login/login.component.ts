import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/services/http.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { Login } from 'src/app/Model/login';
import { Action } from 'rxjs/internal/scheduler/Action';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(
    private userservice:UserService,
    private snackbar:MatSnackBar,
    private formbuilder:FormBuilder,
    private route:ActivatedRoute,
    private router:Router,
  ) { }
    login:Login=new Login();
    loginForm:FormGroup;
    token:string
  ngOnInit() {
    this.token = this.route.snapshot.paramMap.get('token');
    console.log(this.token);
    this.loginForm=this.formbuilder.group(
      {
        "email":new FormControl(this.login.email,Validators.required),
        "password":new FormControl(this.login.password,Validators.minLength(5))
        
      }
    )
    
  }
   email=new FormControl(this.login.email,Validators.required)
   password=new  FormControl(this.login.password,Validators.required)
  onLogin()
  {
   
    this.userservice.postRequest('userservice/login',this.loginForm.value).subscribe(
      (response:any):any=>
      {
        if(response.statuscode==200)
        {
          console.log(response)
          localStorage.setItem('token',response.data);
          localStorage.setItem('email',this.login.email);
          this.snackbar.open("login successfully...","close",{duration:2500})
          this.router.navigateByUrl('/dashboard');
          console.log("Succcessfully logged in");
          
        }
        else
        {
          this.snackbar.open("Invalid username or password","close",{duration:2500})
        }
      }
    )
  }
 

}
