import { Component, OnInit, Input, Output,EventEmitter } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { NoteService } from 'src/app/services/note.service';
import { LabelService } from 'src/app/services/label.service';
import { DataService } from 'src/app/services/data.service';




@Component({
  selector: 'app-icon',
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.scss']
})
export class IconComponent implements OnInit {

  constructor(private snackbar:MatSnackBar,private noteservice:NoteService,private labelservice:LabelService,
    private dataservice:DataService) { }
  labelsList:any;
  noteLabelsList:any;
  message:any;
  @Input() noteInfo:any
  @Output() onChangeColor:EventEmitter<String>=new EventEmitter();

  ngOnInit() {
   
   this.dataservice.currentMessage.subscribe(
    message=>{
      this.getLabelsOfNotes();
      this.getLabels();
     
     
    } 
   )
  }

  colors=[
    [
      {colorName:"white",colorCode:'#FFFFFF'},
      {colorName:'green',colorCode:'#008000'},
      {colorName:'grey',colorCode:'#808080'}
    ],
    [
      {colorName:'indian red',colorCode:'#CD5C5C'},
      {colorName:'crimson',colorCode:'#DC143C'},
      {colorName:'yellow',colorCode:'#FFFF00'}
    ],
    [
      {colorName:'Purple',colorCode:'#800080'},
      {colorName:'Teal',colorCode:'#008080'},
      {colorName:'light blue',colorCode:'#ADD8E6'}
    ]
  ]

 

    onTrash()
    {
     
      this.noteservice.getRequest("noteservice/trashandUntrash?noteId="+this.noteInfo.noteId).subscribe
      (
        (response:any):any=>
        {
          if(response.statuscode==200)
          {
            this.dataservice.changeMessage("trash")
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
            this.dataservice.changeMessage("archive");
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
            this.dataservice.changeMessage("addlabel")
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
            this.dataservice.changeMessage("removelabel")
            this.snackbar.open("label removed from note","close",{duration:2500});
          }
          else
          {
            this.snackbar.open("Please check fields....","close",{duration:2500});
          }
        }
      )
    }
    onColor(colorName:any)
    {
      console.log("color ==>",colorName);
      
      this.noteservice.putRequest("noteservice/color?noteId="+this.noteInfo.noteId+"&colorCode="+colorName,null).subscribe(

        (response:any):any=>
        {
          if(response.statuscode)
          {
            this.dataservice.changeMessage("color")
            this.snackbar.open("color set to note","close",{duration:2500});
          }
        }
      )
    }
    
    setColor(color) {
      this.onChangeColor.emit(color);
      }
}
//     this.noteService.putRequest("note/color?colorCode=" + color + "&noteId=" + this.noteData.id).subscribe(