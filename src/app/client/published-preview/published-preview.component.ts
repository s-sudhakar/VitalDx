import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
// import {MenuItem} from 'primeng/api';

@Component({
  selector: 'app-published-preview',
  templateUrl: './published-preview.component.html',
  styleUrls: ['./published-preview.component.css']
})
export class PublishedPreviewComponent implements OnInit {
  // closeResult: string | undefined;
  // values: string[] | undefined;

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
