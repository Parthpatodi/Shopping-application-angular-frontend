import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenSubcategoryComponent } from './men-subcategory.component';

describe('MenSubcategoryComponent', () => {
  let component: MenSubcategoryComponent;
  let fixture: ComponentFixture<MenSubcategoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenSubcategoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MenSubcategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
