import { TestBed } from '@angular/core/testing';

import { AuthoService } from './autho.service';

describe('AuthService', () => {
  let service: AuthoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
