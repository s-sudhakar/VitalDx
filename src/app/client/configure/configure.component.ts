import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-configure',
  templateUrl: './configure.component.html',
  styleUrls: ['./configure.component.css']
})
export class ConfigureComponent implements OnInit {

  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
  }

  gotoPublished() {
    this.router.navigate(['client/published']);
  }

  gotoConfigure() {
    this.router.navigate(['client/configure']);
  }

  gotoApproval() {
    this.router.navigate(['client/approval']);
  }

  gotoAudit() {
    this.router.navigate(['client/audit']);
  }

  openConfigurePreview() {
    this.router.navigate(['client/configure-preview']);
  }

  logOut() {
    this.router.navigate(['/']);
  }

}
