import { Component, OnInit, Inject } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { Note } from 'src/app/Model/note';
import { MatSnackBar } from '@angular/material/snack-bar';
import { NoteService } from 'src/app/services/note.service';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-updatenote',
  templateUrl: './updatenote.component.html',
  styleUrls: ['./updatenote.component.scss']
})
export class UpdatenoteComponent implements OnInit {

 
  open: boolean = true;
  constructor(@Inject(MAT_DIALOG_DATA) public data:any,private noteService: NoteService,
    private snackBar: MatSnackBar,
    private router: Router,private dialog:MatDialog,private dataservice:DataService) { }

  updateForm:FormGroup;

  note : Note = new Note();

  ngOnInit() {
    this.updateForm=new FormBuilder().group({
   
      "title" : new FormControl(this.data.title),
      "description" : new FormControl(this.data.description)
      });
  }
  
  
  
   
  updateNote()
  {
    this.noteService.putRequest("noteservice/note?noteId="+this.data.noteId,this.updateForm.value).subscribe
    (
      (response:any):any=>
      {
        if(response.statuscode=200)
        {
          this.dataservice.changeMessage("updatenote")
          this.snackBar.open("note updated","close",{duration:2500});
        }
        else{
          this.snackBar.open("note note updated","close",{duration:2500});
        }
      }
      
    )
    this.dialog.closeAll();
  }
 
  
}
