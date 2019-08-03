import { Component, OnInit } from '@angular/core';
import { NoteService } from 'src/app/services/note.service';
import { MatDialog } from '@angular/material/dialog';
import { UpdatenoteComponent } from '../updatenote/updatenote.component';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-gridlist',
  templateUrl: './gridlist.component.html',
  styleUrls: ['./gridlist.component.scss']
})
export class GridlistComponent implements OnInit {

  constructor(private noteservice:NoteService, private dialog:MatDialog,private dataservice:DataService) { }
  notesList:any
  ngOnInit() {
    this.dataservice.currentMessage.subscribe
    (
      message=>{
        this.gridList();
      }
    )
  }

  gridList()
  {
    this.noteservice.getRequest("noteservice/notes").subscribe(
      data => {
        this.notesList= data;
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
