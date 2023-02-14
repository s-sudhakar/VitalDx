import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MasterFontComponent } from './master-font.component';

describe('MasterFontComponent', () => {
  let component: MasterFontComponent;
  let fixture: ComponentFixture<MasterFontComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MasterFontComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MasterFontComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
