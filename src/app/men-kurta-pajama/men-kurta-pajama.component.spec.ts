import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenKurtaPajamaComponent } from './men-kurta-pajama.component';

describe('MenKurtaPajamaComponent', () => {
  let component: MenKurtaPajamaComponent;
  let fixture: ComponentFixture<MenKurtaPajamaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenKurtaPajamaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MenKurtaPajamaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
