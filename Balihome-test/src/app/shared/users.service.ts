import { Injectable } from '@angular/core';
import { User } from './models';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  userName: string = '';
  private usersSubject = new BehaviorSubject<User[]>([]);
  users$ = this.usersSubject.asObservable();

  users: User[] = [];
  constructor() {}
  saveUsersInService(users: User[]) {
    this.usersSubject.next(users);
  }
}
