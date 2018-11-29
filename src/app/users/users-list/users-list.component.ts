import { Component, OnInit } from '@angular/core';
import { UsersService, IUser } from '../users.service';
import 'rxjs/add/operator/map';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';



@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.less']
})

export class UsersListComponent implements OnInit {
   users = [
   ];

  constructor(private usersService: UsersService,
              private router: Router) { }

  ngOnInit() {
    this.usersService.getUsers().subscribe((users) => this.users = users);
  }

  goToAdd(): void {
    this.router.navigate(['users/add']);
  }
  goToEdit(id: number): void {
    this.router.navigate([`users/${id}`]);
  }
}
