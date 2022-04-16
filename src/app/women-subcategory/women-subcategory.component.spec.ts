import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WomenSubcategoryComponent } from './women-subcategory.component';

describe('WomenSubcategoryComponent', () => {
  let component: WomenSubcategoryComponent;
  let fixture: ComponentFixture<WomenSubcategoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WomenSubcategoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WomenSubcategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
