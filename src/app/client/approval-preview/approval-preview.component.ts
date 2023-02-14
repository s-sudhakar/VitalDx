import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-approval-preview',
  templateUrl: './approval-preview.component.html',
  styleUrls: ['./approval-preview.component.css']
})
export class ApprovalPreviewComponent implements OnInit {

  constructor(private modalService: NgbModal) { }

  ngOnInit(): void {
  }

  open(downloadcontent: any) {
		this.modalService.open(downloadcontent, { ariaLabelledBy: 'modal-basic-title', size:'xl' }).result.then(
			(result) => {
				// this.closeResult = `Closed with: ${result}`;
			},
			(reason) => {
				// this.closeResult = `Dismissed ${}`;
			},
		);
	}

}
