import { Component, OnInit } from '@angular/core';
import { Register } from 'src/app/Model/register';
import { HttpService } from 'src/app/services/http.service';
import {MatSnackBar} from '@angular/material/snack-bar';
import { FormGroup,FormBuilder, FormControl, Validators } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  constructor(private userservice:UserService, private snackbar:MatSnackBar,
    private formbuilder:FormBuilder

  ) { }
  
    register:Register=new Register();
    registerForm:FormGroup;
    name=new FormControl(this.register.name,[Validators.minLength(4)])
        email=new FormControl(this.register.email,Validators.required)
        password=new FormControl(this.register.password,[Validators.required,Validators.minLength(6)])
        phoneNumber=new FormControl(this.register.phoneNumber,[Validators.required])
  ngOnInit() {
   
        // 'name':new FormControl(this.register.name,[Validators.minLength(4)]),
        // 'email':new FormControl(this.register.email,Validators.required),
        // 'password':new FormControl(this.register.password,[Validators.required,Validators.minLength(6)]),
        // 'phoneNumber':new FormControl(this.register.phoneNumber,[Validators.required])
       
      
    
  }
  
  onRegister()
  {
    console.log("register")
    console.log(this.register)
    
    this.userservice.postRequest('userservice/register',this.register).subscribe(
     
      (response:any):any =>
      {
        console.log("sdflkjasklj")
        if(response.statuscode==200)
        {
          console.log(response);
          this.snackbar.open(
            "registered successfully..","undo",{duration:2500}
          )
        }else
        {
          console.log(response);
          this.snackbar.open(
              "Registration Failed",
              "undo",
          {
            duration:2500
          }
       )
        }
      }
    );
    

  }

}
