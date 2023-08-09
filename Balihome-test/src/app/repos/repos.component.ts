import { ModalComponent } from '../modal/modal.component';
import { MdbModalRef, MdbModalService } from 'mdb-angular-ui-kit/modal';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UsersService } from '../shared/users.service';
import { HttpClient } from '@angular/common/http';
import { EventEmitter } from '@angular/core';
import { Output } from '@angular/core';

@Component({
  selector: 'app-repos',
  templateUrl: './repos.component.html',
  styleUrls: ['./repos.component.css']
})
export class ReposComponent implements OnInit {
  repos: any = [];
  modalRef: MdbModalRef<ModalComponent> | null = null;
  @Output() openedRepo = new EventEmitter();
  constructor(
    private usersService: UsersService,
    private router: Router,
    private route: ActivatedRoute,
    private http: HttpClient,
    private modalService: MdbModalService
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
        },
        (error) => {
          console.log(error.message);
        }
      );
  }

  openModal(repo: any) {
    this.modalRef = this.modalService.open(ModalComponent);
    this.usersService.repo = repo;
  }
}
