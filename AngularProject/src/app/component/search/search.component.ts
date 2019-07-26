import { Component, OnInit } from '@angular/core';
import { NoteService } from 'src/app/services/note.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { DashboardComponent } from '../dashboard/dashboard.component';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  notesList : any;
  constructor(private dashBoard : DashboardComponent) { }
  
  ngOnInit() {
    this.onSearch();
  }
  onSearch()
  {

    this.dashBoard.currentMessage.subscribe(
      (data: any)=>{
        this.notesList = data;
        console.log("Search")
        console.log(this.notesList);
      }
    );
  }
}
