import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SessionsListComponent } from './sessions/sessions-list/sessions-list.component';
import { UsersListComponent } from './users/users-list/users-list.component';
import { SessionsDetailComponent } from './sessions/session-detail/session-detail.component';
import { UserDetailComponent } from './users/user-detail/user-detail.component';
import { NgModule } from '@angular/core';
import { AuthGuard } from './common/auth/auth.guard';
import { LoginComponent } from './common/auth/login.component';

const appRoutes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'sessions', component: SessionsListComponent, canActivate: [AuthGuard]},
  { path: 'sessions/:sessionsId', component: SessionsDetailComponent },
  { path: 'users', component: UsersListComponent },
  { path: 'users/:id', component: UserDetailComponent },
];

@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forRoot(appRoutes)],
})
export class AppRoutingModule { }
