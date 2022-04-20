import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenProductviewComponent } from './men-productview.component';

describe('MenProductviewComponent', () => {
  let component: MenProductviewComponent;
  let fixture: ComponentFixture<MenProductviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenProductviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MenProductviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
