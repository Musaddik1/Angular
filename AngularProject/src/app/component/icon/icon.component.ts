import { Component, OnInit, Input } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { NoteService } from 'src/app/services/note.service';
import { Note } from 'src/app/Model/note';


@Component({
  selector: 'app-icon',
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.scss']
})
export class IconComponent implements OnInit {

  constructor(private snackbar:MatSnackBar,private noteservice:NoteService) { }

  ngOnInit() {
  }

  @Input() noteInfo:any

    onTrash()
    {
     
      this.noteservice.getRequest("noteservice/trashandUntrash?noteId="+this.noteInfo.noteId).subscribe
      (
        (response:any):any=>
        {
          if(response.statuscode==200)
          {
            this.snackbar.open("note is trashed","close",{duration:2500})
          }
          else
          {
            this.snackbar.open("note is untrashed","close",{duration:2500})
          }
        }
      )
    }
    onArchive()
    {
      this.noteservice.getRequest("noteservice/archiveandUnarchive?noteId="+this.noteInfo.noteId).subscribe(
        (response:any):any=>
        {
          if(response.statuscode==200)
          {
            this.snackbar.open("note is archived","close",{duration:2500})
          }
          else
          {
            this.snackbar.open("note is unarchived","close",{duration:2500})
          }
        }
      )
      
    }
  
}
