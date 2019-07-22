import { Component, OnInit } from '@angular/core';
import { Note } from 'src/app/Model/note';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { NoteService } from 'src/app/services/note.service';

@Component({
  selector: 'app-createnote',
  templateUrl: './createnote.component.html',
  styleUrls: ['./createnote.component.scss']
})
export class CreatenoteComponent implements OnInit {

  constructor(private snackbar:MatSnackBar,private noteservice:NoteService) { }
  showAddNote:boolean
  note:Note=new Note();
  createForm:FormGroup;
  ngOnInit() {
    this.showAddNote=false;
    this.createForm=new FormBuilder().group(
      {
        "title":new FormControl(this.note.title,Validators.required),
        "description":new FormControl(this.note.description,Validators.required)
      }
    )
  }

  showBar()
  {
    this.showAddNote=true
  }
  close()
  {
    
      console.log(this.createForm.value)
      if(this.createForm.value!=null)
      {
      this.noteservice.postRequest("noteservice/note",this.createForm.value).subscribe(
        (response:any):any=>
        {
          if(response.statuscode==200)
          {
            this.snackbar.open("note created","close",{duration:2500})
          }
          else
          {
            this.snackbar.open("note not created ","close",{duration:2500})
          }
        }
      )
      this.showAddNote=false;
      }else
      {
        this.snackbar.open("please enter titlel and description","open",{duration:25000})
      }
    }
  
}
