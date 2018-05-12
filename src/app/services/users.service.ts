import users from './../data/users';

import { Injectable } from '@angular/core';
import { User } from '../data/users.interface';

@Injectable()
export class UsersService {
  private users: User[] = [];

  constructor() {
    this.users = users;
  }

  getUsers() {
    return this.users.slice();
  }
}
