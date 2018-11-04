import { TestBed, inject } from '@angular/core/testing';

import * as usersService from './users.service';

describe('UsersService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [usersService.UsersService]
    });
  });

  it('should be created', inject([usersService.UsersService], (service: usersService.UsersService) => {
    expect(service).toBeTruthy();
  }));
});
