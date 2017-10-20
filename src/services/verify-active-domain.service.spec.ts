/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { VerifyActiveDomainService } from './verify-active-domain.service';

describe('Service: VerifyActiveDomain', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [VerifyActiveDomainService]
    });
  });

  it('should ...', inject([VerifyActiveDomainService], (service: VerifyActiveDomainService) => {
    expect(service).toBeTruthy();
  }));
});
