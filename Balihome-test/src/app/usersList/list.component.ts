import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UsersService } from '../shared/users.service';
import { User } from '../shared/models';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  constructor(
    private usersService: UsersService,
    private router: Router,
    private route: ActivatedRoute
  ) {}
  users: User[] = [];
  ngOnInit(): void {
    this.usersService.users$.subscribe((updatedUsers) => {
      this.users = updatedUsers;
    });
  }
  searchRepos(event: Event) {
    if (event && event.target) {
      const target = event.target as HTMLElement;
      if (target.className.includes('login')) {
        if (target.textContent) {
          this.usersService.userName = target.textContent;
          let url: string = '/repos/' + target.textContent;
          this.router.navigateByUrl(url);
        }
      }
    }
  }
}
