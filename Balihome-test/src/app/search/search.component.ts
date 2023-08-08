import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User, UsersResponse } from '../shared/models';
import { UsersService } from '../shared/users.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
  searchValue: string = '';
  errorMessage: string = '';
  requestError: boolean = false;
  constructor(private http: HttpClient, private usersService: UsersService) {}
  handleSearch() {
    this.http
      .get<UsersResponse>(
        `https://api.github.com/search/users?q=${this.searchValue}`
      )
      .subscribe(
        (response) => {
          this.usersService.saveUsersInService([...response.items]);
          this.requestError = false;
        },
        (error) => {
          this.requestError = true;
          this.errorMessage = error.message;
          this.usersService.saveUsersInService([]);
        }
      );
  }
}
