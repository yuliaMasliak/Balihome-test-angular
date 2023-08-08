import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsersService } from '../shared/users.service';
import { User } from '../shared/models';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  constructor(private usersService: UsersService) {}
  users: User[] = [];
  ngOnInit(): void {
    this.usersService.users$.subscribe((updatedUsers) => {
      this.users = updatedUsers;
    });
  }
}
