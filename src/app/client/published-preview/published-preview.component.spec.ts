import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PublishedPreviewComponent } from './published-preview.component';

describe('PublishedPreviewComponent', () => {
  let component: PublishedPreviewComponent;
  let fixture: ComponentFixture<PublishedPreviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PublishedPreviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PublishedPreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
