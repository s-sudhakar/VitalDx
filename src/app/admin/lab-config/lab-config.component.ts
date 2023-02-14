import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-lab-config',
  templateUrl: './lab-config.component.html',
  styleUrls: ['./lab-config.component.css']
})
export class LabConfigComponent implements OnInit {

  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
  }

  gotoPathAxisLaboratory() {
    this.router.navigate(['client/configure']);
  }

  gotoAdminConfig() {
    this.router.navigate(['admin/admin-config']);
  }

  gotoLabConfig() {
    this.router.navigate(['admin/lab-config']);
  }

  logOut() {
    this.router.navigate(['/']);
  }

}
