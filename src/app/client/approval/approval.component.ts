import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-approval',
  templateUrl: './approval.component.html',
  styleUrls: ['./approval.component.css']
})
export class ApprovalComponent implements OnInit {

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

  openApprovalPreview() {
    this.router.navigate(['client/approval-preview']);
  }

  logOut() {
    this.router.navigate(['/']);
  }

}