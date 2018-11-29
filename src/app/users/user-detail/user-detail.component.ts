import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IUser, UsersService } from '../users.service';
import { ToastsManager } from 'ng2-toastr';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.less']
})
export class UserDetailComponent implements OnInit {

  user: IUser;
  currentUser: IUser;
  constructor(
      private route: ActivatedRoute,
      private router: Router,
      private usersService: UsersService,
      private toastsManager: ToastsManager,
  ) { }

  ngOnInit() {
    let id: string | number = this.route.snapshot.paramMap.get('id');
    // tslint:disable-next-line:radix
     id = isNaN(parseInt(id)) ? 0 : parseInt(id);  // if it not a number make it 0 else make it the id
   // id = parseInt(id, 10);
    console.log(id);
    if (id) {  // zero in a number is false
               // zero in an if statement means false
               // blank string in if statement false
        this.usersService.getUserById(id)   // getting from ID
            .subscribe((currentUser) => {
                this.user = currentUser;   // what am I doing wrong here.
                console.log(currentUser);
                console.log(this.user);
            });
    } else {
        // new
        this.user = {
            id: 0,
            userName: '',
            password: '',
            firstName: '',
            lastName: '',
            createdAt: '',
            updatedAt: '',
          };

          console.log(this.user);
    }
}

  save(): void {
    if (!this.formValid()) {
        console.log('form invalid');
        this.toastsManager.error('Form invalid');
        return;
    }
    this.usersService.save(this.user)
        .subscribe((user) => {
            this.toastsManager.success('Added Sucessfully');
            this.router.navigate(['users']);
        });
}

private formValid(): boolean {
    return this.user.firstName && this.user.lastName ? true : false;
}

cancel(): void {
    this.router.navigate(['users']);
}

}
