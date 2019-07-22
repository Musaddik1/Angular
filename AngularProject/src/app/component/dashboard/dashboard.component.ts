import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }
  onLogout()
  {
   
    localStorage.removeItem("token");
   
    this.router.navigateByUrl('/login');
  }
  getTrash()
  {
    this.router.navigate(['dashboard/getTrash']);
  }
  onNotes()
  {
    this.router.navigate(['dashboard/getnote']);
  }
  getArchive()
  {
    this.router.navigate(['dashboard/getArchive'])
  }
}
