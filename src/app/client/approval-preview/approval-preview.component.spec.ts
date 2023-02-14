import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApprovalPreviewComponent } from './approval-preview.component';

describe('ApprovalPreviewComponent', () => {
  let component: ApprovalPreviewComponent;
  let fixture: ComponentFixture<ApprovalPreviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApprovalPreviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ApprovalPreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
