import { TestBed } from '@angular/core/testing';

import { AuthCardService } from './auth-card.service';

describe('AuthCardService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AuthCardService = TestBed.get(AuthCardService);
    expect(service).toBeTruthy();
  });
});
