import { Component, signal } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { IUser } from '../../models/iuser.model';
import { UserService } from '../../services/user.service';
import { UserComponent } from "../user/user.component";
import { HeaderComponent } from "../header/header.component";
import { AsyncPipe } from '@angular/common';
import { TasksComponent } from "../tasks/tasks.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [UserComponent, HeaderComponent, AsyncPipe, TasksComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  protected users$: Observable<Array<IUser>>;
  protected selectedUser?: IUser;
  constructor(private userService: UserService) {
    this.users$ = this.userService.getUsers().pipe(tap((users) => {
      this.selectedUser = users[0];
    }));
  }
  public onSelectUser(user: IUser): void {
    this.selectedUser = user;
  }
}
