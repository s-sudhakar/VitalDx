import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-audit',
  templateUrl: './audit.component.html',
  styleUrls: ['./audit.component.css']
})
export class AuditComponent implements OnInit {

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

  logOut() {
    this.router.navigate(['/']);
  }

}
