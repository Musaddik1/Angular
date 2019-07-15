import { Component, OnInit } from '@angular/core';
import { Resetpassword } from 'src/app/Model/resetpassword';
import { ActivatedRoute } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { HttpService } from 'src/app/services/http.service';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-resetpassword',
  templateUrl: './resetpassword.component.html',
  styleUrls: ['./resetpassword.component.scss']
})
export class ResetpasswordComponent implements OnInit {

  constructor(private route:ActivatedRoute,private snackbar:MatSnackBar,private httpClient:HttpService) { }
  resetpassword:Resetpassword=new Resetpassword();
  token:string;
  ngOnInit() {
    this.token = this.route.snapshot.paramMap.get('token');
  }
  
  password=new FormControl(this.resetpassword.password,Validators.minLength(5))
  confirmPassword=new FormControl(this.resetpassword.confirmPassword,Validators.minLength(5));

  onReset()
  {
    this.httpClient.putRequest('userservice/resetpassword'+this.confirmPassword).subscribe(
      (response:any):any=>
      {
        if(response.statuscode==200)
        {
          localStorage.setItem('token',response.data);
          this.snackbar.open("Password reset successfully..","close",{duration:2500})
        }else
        {
          this.snackbar.open("enter both field correctly..","close",{duration:2500})
        }
      }
    )
  }
}
