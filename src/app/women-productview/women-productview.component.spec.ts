import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WomenProductviewComponent } from './women-productview.component';

describe('WomenProductviewComponent', () => {
  let component: WomenProductviewComponent;
  let fixture: ComponentFixture<WomenProductviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WomenProductviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WomenProductviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
