import { Component, OnInit } from '@angular/core';
import { LabelService } from 'src/app/services/label.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog } from '@angular/material/dialog';
import { Label } from 'src/app/Model/label';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-editlabel',
  templateUrl: './editlabel.component.html',
  styleUrls: ['./editlabel.component.scss']
})
export class EditlabelComponent implements OnInit {

  constructor(private labelservice:LabelService,private snackBar:MatSnackBar,
    private dataservice:DataService, private dialog:MatDialog) { }

  label:Label=new Label();
  labelForm:FormGroup;
  
  labelsList:any
  ngOnInit() {
    this.dataservice.currentMessage.subscribe(
      message=>{
        this.getLabel();
      }
    )
    this.labelForm=new FormBuilder().group(
      {
        labelName:new FormControl(this.label.labelName,Validators.required)
      }
    )
  }
  getLabel()
  {
    this.labelservice.getRequest("labelservice/labels").subscribe(
      (data:any):any=>
      {
        this.labelsList=data
        console.log("get All label",data);
        
      }
    )
  }
  editLabel()
  {
    console.log(this.labelForm.value);
    this.labelservice.postRequest("labelservice/label",this.labelForm.value).subscribe(
      (response:any):any=>
      {
        if(response.statuscode==200)
        {
          this.dataservice.changeMessage("createlabel")
          this.snackBar.open("label created ","close",{duration:2500});
        }
      }
    )
    this.dialog.closeAll();
  }
  updateLabel(item:any)
  {
    console.log(item.labelId)
    console.log(item.labelName)
    this.labelservice.putRequest("labelservice/label?labelId="+item.labelId,this.labelForm.value).subscribe
    (
      (response:any):any=>
      {
        if(response.statuscode==200)
        {
          this.dataservice.changeMessage("updatelabel")
          this.snackBar.open("label updated","close",{duration:2500})
        }
      }
    )
    this.dialog.closeAll();
  }
  deleteLabel(item:any)
  {
    console.log(item.labelId);
    this.labelservice.deleteRequest("labelservice/label?labelId="+item.labelId).subscribe
    (
     (response:any):any=>
     {
       if(response.statuscode==200)
       {
         this.dataservice.changeMessage("deletelabel")
         this.snackBar.open("label deleted","close",{duration:2500});
       }
     }
    )
     this.dialog.closeAll();
  }
}
