import { Component, OnInit } from '@angular/core';
import { Resetpassword } from 'src/app/Model/resetpassword';
import { ActivatedRoute } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { HttpService } from 'src/app/services/http.service';
import { FormControl, Validators } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';


@Component({
  selector: 'app-resetpassword',
  templateUrl: './resetpassword.component.html',
  styleUrls: ['./resetpassword.component.scss']
})
export class ResetpasswordComponent implements OnInit {

  constructor(private route:ActivatedRoute,private snackbar:MatSnackBar,
    private userservice:UserService) { }
  resetpassword:Resetpassword=new Resetpassword();
  token:any;
 
  ngOnInit() {
  
    this.token=this.route.snapshot.paramMap.get('token');
    localStorage.setItem('token',this.token);

    console.log("token is",this.token);
  }

  password=new FormControl(this.resetpassword.password,Validators.minLength(5))
  confirmPassword=new FormControl(this.resetpassword.confirmPassword,Validators.minLength(5));


  onReset()
  {
    
    if(this.password.value==this.confirmPassword.value)
    {
    this.userservice.putRequest("userservice/resetpassword?password="+this.resetpassword.password,this.resetpassword.password).subscribe(
      (response:any):any=>
      {
        
        if(response.statuscode==200)
        {
          
          this.snackbar.open("Password reset successfully..","close",{duration:2500})
        }else
        {
          this.snackbar.open("enter both field correctly..","close",{duration:2500})
        }
      }
    )
  }

  else
  {
    console.log("please enter both field correctly..");
  }
 }
}
