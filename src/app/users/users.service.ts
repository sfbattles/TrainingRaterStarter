import { Injectable } from '@angular/core';

@Injectable()
export class UsersService {
    usersMock = [{ Name: 'John Graham', userName: 'johng' },
    { Name: 'Scott Williams', userName: 'scottw' },
    { Name: 'Jack Travis', userName: 'jackt' },
    ];
    constructor() { }

    getUsers(): {}[] {
      return this.usersMock;
    }
  }
