import { Component, OnInit, Input } from '@angular/core';
import { NoteService } from 'src/app/services/note.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { BehaviorSubject } from 'rxjs';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-archive',
  templateUrl: './archive.component.html',
  styleUrls: ['./archive.component.scss']
})
export class ArchiveComponent implements OnInit {

  constructor(private noteservice:NoteService,private snackBar:MatSnackBar,private dataservice:DataService) { }
  notesList:any
 
  @Input() noteInfo:any
  ngOnInit() {
    this.dataservice.currentMessage.subscribe(
      message=>{
        this.getArchive();
      }
    )
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
