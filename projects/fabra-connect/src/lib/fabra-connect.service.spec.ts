import { TestBed } from '@angular/core/testing';

import { FabraConnectService } from './fabra-connect.service';

describe('FabraConnectService', () => {
  let service: FabraConnectService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FabraConnectService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
