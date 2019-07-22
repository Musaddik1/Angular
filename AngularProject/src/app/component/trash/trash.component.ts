import { Component, OnInit } from '@angular/core';
import { NoteService } from 'src/app/services/note.service';

@Component({
  selector: 'app-trash',
  templateUrl: './trash.component.html',
  styleUrls: ['./trash.component.scss']
})
export class TrashComponent implements OnInit {

  notesList:any
  constructor(private noteservice:NoteService) { }

  ngOnInit() {
    this.getTrash();
  }

  getTrash() {
    this.noteservice.getRequest("noteservice/getTrash").subscribe(
      data => {
        this.notesList= data;
        console.log('get trash note ==>', data);
      }
    )
  }
}
