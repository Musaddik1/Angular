import { Component, OnInit, Input } from '@angular/core';
import { NoteService } from 'src/app/services/note.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog } from '@angular/material/dialog';
import { UpdatenoteComponent } from '../updatenote/updatenote.component';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-getnote',
  templateUrl: './getnote.component.html',
  styleUrls: ['./getnote.component.scss']
})
export class GetnoteComponent implements OnInit {
  constructor(private noteservice: NoteService, private snackbar: MatSnackBar,
    private dialog:MatDialog,private dataservice:DataService) { }

  noteList: any;
  ngOnInit()  {
    this.dataservice.currentMessage.subscribe(
      message=>{
        this.getNote();
      }
    )
  }
 

  getNote() {
    this.noteservice.getRequest("noteservice/notes").subscribe(
      data => {
        this.noteList= data;
        console.log('get all note ==>', data);
      }
    )
  }
  openDialog(note:any)
  {
    const ref=this.dialog.open(UpdatenoteComponent,{
      
      width:"458px",
      height:"259px",
      
      data:{
        noteId:note.noteId,
        title:note.title,
        description:note.description
      }
    })
  }
 
}
