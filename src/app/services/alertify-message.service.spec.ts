import { TestBed } from '@angular/core/testing';

import { AlertifyMessageService } from './alertify-message.service';

describe('AlertifyMessageService', () => {
  let service: AlertifyMessageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AlertifyMessageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
