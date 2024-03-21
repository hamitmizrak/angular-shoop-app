import { TestBed } from '@angular/core/testing';

import { BlogArrayDataServiceService } from './blog-array-data-service.service';

describe('BlogArrayDataServiceService', () => {
  let service: BlogArrayDataServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BlogArrayDataServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
