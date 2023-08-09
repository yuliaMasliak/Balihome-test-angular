import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UsersService } from '../shared/users.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-repos',
  templateUrl: './repos.component.html',
  styleUrls: ['./repos.component.css']
})
export class ReposComponent implements OnInit {
  repos: any = [];
  modal: boolean = false;
  constructor(
    private usersService: UsersService,
    private router: Router,
    private route: ActivatedRoute,
    private http: HttpClient
  ) {}

  ngOnInit(): void {
    this.navigateToUserRepos();
  }
  navigateToUserRepos() {
    let url: string = '/repos/' + this.usersService.userName;
    this.router.navigateByUrl(url);
    this.handleSearchRepos();
  }

  handleSearchRepos() {
    this.http
      .get<any>(
        `https://api.github.com/users/${this.usersService.userName}/repos`
      )
      .subscribe(
        (repos) => {
          this.repos = [...repos];
          console.log(this.repos);
        },
        (error) => {
          console.log(error.message);
        }
      );
  }
  showRepoDetails(event: Event) {
    console.log(event.target);

    this.modal = true;
  }
}
