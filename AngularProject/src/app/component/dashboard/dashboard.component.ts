import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { EditlabelComponent } from '../editlabel/editlabel.component';
import { Label } from 'src/app/Model/label';
import { LabelService } from 'src/app/services/label.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor(private router:Router,private dialog:MatDialog,private labelservice:LabelService) { }
  notesList:any;
  ngOnInit() {
    this.getLabel();
  }
  onLogout()
  {
   
    localStorage.removeItem("token");
   
    this.router.navigateByUrl('/login');
  }
  getTrash()
  {
    this.router.navigate(['dashboard/getTrash']);
  }
  onNotes()
  {
    this.router.navigate(['dashboard/createnote']);
  }
  getArchive()
  {
    this.router.navigate(['dashboard/getArchive'])
  }

  editLabel()
  {
    const ref=this.dialog.open(EditlabelComponent,{
      width:"280px",
      height:"300px"
    })
  }
  getLabel()
  {
    this.labelservice.getRequest("labelservice/labels").subscribe(
      (data:any):any=>
      {
        this.notesList=data
        console.log("get All label",data);
        
      }
    )
  }
}
