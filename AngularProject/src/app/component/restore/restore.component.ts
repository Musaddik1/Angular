import { Component, OnInit, Input } from '@angular/core';
import { NoteService } from 'src/app/services/note.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-restore',
  templateUrl: './restore.component.html',
  styleUrls: ['./restore.component.scss']
})
export class RestoreComponent implements OnInit {

  constructor(private noteservice:NoteService,private snackbar:MatSnackBar,private dataservice:DataService) { }

  @Input() noteInfo:any
  ngOnInit() {
  }

  onRestore()
  {
    this.noteservice.getRequest("noteservice/trashandUntrash?noteId="+this.noteInfo.noteId).subscribe(
      (response:any):any=>
      {
        if(response.statuscode==200)
        {
          this.dataservice.changeMessage("restore");
          this.snackbar.open("note restored","close",{duration:2500})
        }
        else
        {
          this.snackbar.open("note not present in trash","close",{duration:2500});
        }
      }
    )
  }

  onDelete()
  {
    this.noteservice.deleteRequest("noteservice/note?noteId="+this.noteInfo.noteId).subscribe(
      (response:any):any=>
      {
        if(response.statuscode==200)
        {
          this.dataservice.changeMessage("delete permanently..");
          this.snackbar.open("note deleted permanently..","close",{duration:2500});
        }
        else
        {
          this.snackbar.open("note not in trash","close",{duration:2500});
        }
      }
    )
  }
}
