import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/services/http.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { FormControl, Validators } from '@angular/forms';
import { Forgot } from 'src/app/Model/forgot';
import { validateVerticalPosition } from '@angular/cdk/overlay';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-forget',
  templateUrl: './forget.component.html',
  styleUrls: ['./forget.component.scss']
})
export class ForgetComponent implements OnInit {

  constructor(
   private userservice:UserService,
    private snackbar: MatSnackBar,


  ) { }
  forgot: Forgot = new Forgot();
  // forgetForm:FormGroup

  emailId = new FormControl(this.forgot.emailId, [Validators.required])


  ngOnInit() {

    console.log('in forgot password ==>',localStorage.getItem('token'));

    // this.forgetForm=this.formbuilder.group(
    //   {
    //     "email:new FormControl(thislllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllll.forgot.emailId,[Validators.required])
    //   }
    // )
  }

  onForget() {

  
    console.log('click on forgot ==>',this.forgot.emailId)

    this.userservice.getRequest("userservice/forget?emailId="+this.forgot.emailId,'').subscribe(
      (response: any): any => {
        console.log('forgot done ==>',response);

        if (response.statuscode == 200) {


          this.snackbar.open("Mail sent successfully..", "close", { duration: 2500 })
         
        } else {
          this.snackbar.open("Please check email id ..", "close", { duration: 2500 })
        }
      }
    )


  }

}
