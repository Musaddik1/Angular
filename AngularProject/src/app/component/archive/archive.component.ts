import { Component, OnInit } from '@angular/core';
import { NoteService } from 'src/app/services/note.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-archive',
  templateUrl: './archive.component.html',
  styleUrls: ['./archive.component.scss']
})
export class ArchiveComponent implements OnInit {

  constructor(private noteservice:NoteService,private snackBar:MatSnackBar) { }
  notesList:any
  ngOnInit() {
    this.getArchive();
  }
  getArchive()
  {
    this.noteservice.getRequest("noteservice/getArchive").subscribe(
      data =>{
        this.notesList=data;
        console.log(data);
      }
    )
  }

}
