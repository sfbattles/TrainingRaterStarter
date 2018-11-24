import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IUser, UsersService } from '../users.service';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.less']
})
export class UserDetailComponent implements OnInit {

  user: IUser;

  constructor(
      private route: ActivatedRoute,
      private router: Router,
      private usersService: UsersService,
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
            .subscribe((user) => {
                this.user = user;
              //  console.log(this.user);
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

 /* save(): void {
    if (!this.formValid()) {
        // TODO CCC: pop message about not valid
        console.log('form invalid');
        return;
    }
    this.usersService.save(this.user)
        .subscribe((user) => {
            // TODO CCC: add a success message
            this.router.navigate(['users']);
        });
}

private formValid(): boolean; {
    return this.user.firstName && this.user.lastName ? true : false;
}

cancel(): void {
    this.router.navigate(['users']);
};
*/
}
