import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-custom-color',
  templateUrl: './custom-color.component.html',
  styleUrls: ['./custom-color.component.css']
})
export class CustomColorComponent implements OnInit {

  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
  }

  gotoAdminConfig() {
    this.router.navigate(['admin/admin-config']);
  }

  gotoLabConfig() {
    this.router.navigate(['admin/lab-config']);
  }

  openMasterTheme() {
    this.router.navigate(['admin/admin-config']);
  }

  openMasterColor() {
    this.router.navigate(['admin/master-color']);
  }

  openMasterFont() {
    this.router.navigate(['admin/master-font']);
  }

  openCustomTemplates() {
    this.router.navigate(['admin/custom-templates']);
  }

  openCustomColor() {
    this.router.navigate(['admin/custom-color']);
  }

  logOut() {
    this.router.navigate(['/']);
  }

}
