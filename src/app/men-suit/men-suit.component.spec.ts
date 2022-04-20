import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenSuitComponent } from './men-suit.component';

describe('MenSuitComponent', () => {
  let component: MenSuitComponent;
  let fixture: ComponentFixture<MenSuitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenSuitComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MenSuitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
