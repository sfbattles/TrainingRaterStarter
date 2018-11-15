import { Component, OnInit } from '@angular/core';
import { UsersService, IUser } from '../users.service';


@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.less']
})

export class UsersListComponent implements OnInit {
  users = [
  ];

  constructor(private usersService: UsersService) { }

  ngOnInit() {
    this.usersService.getUsers().subscribe((sessions) => this.users = sessions);
  }
}
