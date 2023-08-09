import { Component, Input, OnInit } from '@angular/core';
import { MdbModalRef } from 'mdb-angular-ui-kit/modal';
import { UsersService } from '../shared/users.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {
  @Input() repo: any;
  constructor(
    public modalRef: MdbModalRef<ModalComponent>,
    private usersService: UsersService
  ) {}
  ngOnInit(): void {
    this.repo = this.usersService.repo;
  }
}
