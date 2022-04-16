import { TestBed } from '@angular/core/testing';

import { WomenSubcategoryService } from './women-subcategory.service';

describe('WomenSubcategoryService', () => {
  let service: WomenSubcategoryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WomenSubcategoryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
