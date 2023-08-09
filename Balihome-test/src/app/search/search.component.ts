import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User, UsersResponse } from '../shared/models';
import { UsersService } from '../shared/users.service';
import { ThemePalette } from '@angular/material/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
  searchValue: string = '';
  errorMessage: string = '';
  requestError: boolean = false;
  errorClass: string = 'default-input-class';
  inputUnderlineColor: string = 'primary';
  colorMappings: Record<string, ThemePalette> = {
    primary: 'primary',
    accent: 'accent',
    warn: 'warn'
  };
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
          this.errorClass = 'default-input-class';
          this.inputUnderlineColor = 'primary';
        },
        (error) => {
          this.requestError = true;
          this.errorMessage = error.error.message;
          this.usersService.saveUsersInService([]);
          this.errorClass = 'error-input-class';
          this.inputUnderlineColor = 'warn';
        }
      );
  }
}
