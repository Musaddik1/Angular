import { Component, OnInit, Input } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { NoteService } from 'src/app/services/note.service';
import { LabelService } from 'src/app/services/label.service';



@Component({
  selector: 'app-icon',
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.scss']
})
export class IconComponent implements OnInit {

  constructor(private snackbar:MatSnackBar,private noteservice:NoteService,private labelservice:LabelService) { }
  labelsList:any;
  noteLabelsList:any;
  ngOnInit() {
    this.getLabels();
    this.getLabelsOfNotes();
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
            this.snackbar.open(response.statusMessage,"close",{duration:2500})
          }
          else if(response.statuscode==200 && !this.noteInfo.noteId==false)
          {
            this.snackbar.open("note is archived","close",{duration:2500})
          }
        }
      )
      
    }
  
    getLabels()
    {
      this.labelservice.getRequest("labelservice/labels").subscribe(
        (data:any):any=>
        {
         this.labelsList=data;
         console.log(data) ;
        }
      )
    }
    addLabeltoNote(label:any)
    {
      this.labelservice.getRequest("labelservice/addlabel?labelId="+label.labelId+"&noteId="+this.noteInfo.noteId).subscribe(
        (respose:any):any=>
        {
          if(respose.statuscode==200)
          {
            this.snackbar.open("label added to note ","close",{duration:2500});
          }
          else
          {
            this.snackbar.open("please check fields...","close",{duration:2500});
          }
        }
      )
    }
    getLabelsOfNotes()
    {
      this.noteservice.getRequest("noteservice/getLabelOfNotes?noteId="+this.noteInfo.noteId).subscribe(
        (data:any):any=>
        {
          this.noteLabelsList=data;
          console.log("noteLabelsList  ==>"+this.noteLabelsList);
          

        }
      )
    }
    removeLabel(labels:any)
    {
      this.labelservice.postRequest("labelservice/removelabel?labelId="+labels.labelId+"&noteId="+this.noteInfo.noteId,'').subscribe
      (
        (response:any):any=>
        {
          if(response.statuscode==200)
          {
            this.snackbar.open("label removed from note","close",{duration:2500});
          }
          else
          {
            this.snackbar.open("Please check fields....","close",{duration:2500});
          }
        }
      )
    }
    
}
