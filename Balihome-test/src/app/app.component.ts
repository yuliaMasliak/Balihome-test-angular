import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsersService } from './shared/users.service';
import { HttpClient } from '@angular/common/http';
import { Observable, async } from 'rxjs';
import { User } from './shared/models';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Balihome-test';
  constructor(
    private router: Router,
    private usersService: UsersService,
    private http: HttpClient
  ) {}
  ngOnInit() {
    this.getAllUsers();
    this.router.navigate(['']);
  }
  getAllUsers(): void {
    this.http.get<User[]>('https://api.github.com/users').subscribe(
      (users) => {
        this.usersService.saveUsersInService([...users]);
      },
      (error) => {
        console.error('Error fetching users:', error);
      }
    );
  }
}
