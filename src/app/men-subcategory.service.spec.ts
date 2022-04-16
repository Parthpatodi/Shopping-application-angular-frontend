import { TestBed } from '@angular/core/testing';

import { MenSubcategoryService } from './men-subcategory.service';

describe('MenSubcategoryService', () => {
  let service: MenSubcategoryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MenSubcategoryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
