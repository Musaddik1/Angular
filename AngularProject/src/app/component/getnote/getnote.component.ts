import { Component, OnInit, Input } from '@angular/core';
import { NoteService } from 'src/app/services/note.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-getnote',
  templateUrl: './getnote.component.html',
  styleUrls: ['./getnote.component.scss']
})
export class GetnoteComponent implements OnInit {
  constructor(private noteservice: NoteService, private snackbar: MatSnackBar) { }

  noteList: any;
  ngOnInit()  {
    this.getNote();
  }
 

  getNote() {
    this.noteservice.getRequest("noteservice/notes").subscribe(
      data => {
        this.noteList= data;
        console.log('get all note ==>', data);
      }
    )
  }
 
}
