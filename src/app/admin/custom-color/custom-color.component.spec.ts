import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomColorComponent } from './custom-color.component';

describe('CustomColorComponent', () => {
  let component: CustomColorComponent;
  let fixture: ComponentFixture<CustomColorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CustomColorComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomColorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
