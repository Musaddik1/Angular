import { Component, OnInit } from '@angular/core';
import { NoteService } from 'src/app/services/note.service';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-trash',
  templateUrl: './trash.component.html',
  styleUrls: ['./trash.component.scss']
})
export class TrashComponent implements OnInit {

  notesList:any
  constructor(private noteservice:NoteService,private dataservice:DataService) { }

  ngOnInit() {
    this.dataservice.currentMessage.subscribe(
      message=>
      {
        this.getTrash();
      }
    )
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
