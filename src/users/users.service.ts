import {Injectable} from '@nestjs/common';
import { Role } from '../constants/enums/roles.enum.js';



export type User = any;

@Injectable()
export class UsersService {
    constructor() {}
    private readonly users = [
    {
      userId: 1,
      username: 'john',
      password: 'changeme',
      role: Role.APPLICANT,
    },
    {
      userId: 2,
      username: 'maria',
      password: 'guess',
      role: Role.ADMIN,
    },
  ];


  findAll(): User[] {
    return this.users;
  }

  findOne(userName: string): User | undefined {
    return this.users.find(user => user.username === userName);
  }

  createUser(user: User): User {
    const newUser = {
      userId: this.users.length + 1,
      ...user,
    };
    this.users.push(newUser);
    return newUser;

  }
}