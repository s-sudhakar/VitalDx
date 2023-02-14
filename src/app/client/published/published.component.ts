import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-published',
  templateUrl: './published.component.html',
  styleUrls: ['./published.component.css']
})
export class PublishedComponent implements OnInit {

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

  openPublishedPreview() {
    this.router.navigate(['client/published-preview']);
  }

  logOut() {
    this.router.navigate(['/']);
  }

}
