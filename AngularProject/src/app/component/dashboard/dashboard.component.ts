import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { EditlabelComponent } from '../editlabel/editlabel.component';
import { Label } from 'src/app/Model/label';
import { LabelService } from 'src/app/services/label.service';
import { NoteService } from 'src/app/services/note.service';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { BehaviorSubject } from 'rxjs';
import { UserService } from 'src/app/services/user.service';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  private obtainNotes = new BehaviorSubject([]);
  currentMessage = this.obtainNotes.asObservable();
  constructor(private router:Router,private dialog:MatDialog,
   private dataservice:DataService, private userservice:UserService, private labelservice:LabelService,private noteservice:NoteService) { }
  notesList:any;
  searchNotes:any;
  ngOnInit() {
    
    this.dataservice.currentMessage.subscribe
    (
      message=>{
        this.getLabel();
      }
    )
  }
  show:boolean;
  open=false;
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
  gridList()
  {
    if(this.open==false)
    {
      this.open=true;
    this.router.navigate(['dashboard/gridlist']);
    }else if(this.open==true)
    {
      this.open=false;
      this.router.navigate(['dashboard/createnote']);
    }
   
  }
  onSearch(text:any)
  {
    this.noteservice.getRequest("noteservice/search?text="+text).subscribe
    (
      (response:any):any=>{
        this.obtainNotes.next(response);
        console.log("search notes =>",response)
       this.router.navigate(["dashboard/search"])
      }
    );
    
   }

  editLabel()
  {
    const ref=this.dialog.open(EditlabelComponent,{
      width:"280px",
    //  height:"300px"
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
  image:string;
  Profile()
  {
    this.userservice.postRequest("userservice/geturl",'').subscribe
  
    (
      (url:any):any=>
      {
        this.image=url;
        console.log(this.image);
        
      }
    )
   
  }
 
}
