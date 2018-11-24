import { NgModule } from '@angular/core';
import { UsersService } from './users.service';
import { UsersListComponent } from './users-list/users-list.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { UserDetailComponent } from './user-detail/user-detail.component';

@NgModule({
    declarations: [
      UsersListComponent,
      UserDetailComponent,
    ],
    imports: [
        CommonModule,
        FormsModule,
    ],
    providers: [
        UsersService,
    ],
})
export class UsersModule { }
