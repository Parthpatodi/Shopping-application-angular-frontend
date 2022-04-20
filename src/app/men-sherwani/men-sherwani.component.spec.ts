import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenSherwaniComponent } from './men-sherwani.component';

describe('MenSherwaniComponent', () => {
  let component: MenSherwaniComponent;
  let fixture: ComponentFixture<MenSherwaniComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenSherwaniComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MenSherwaniComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
