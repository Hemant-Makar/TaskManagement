import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { IUser } from '../../models/iuser.model';
import { UserService } from '../../services/user.service';
import { UserComponent } from "../user/user.component";
import { HeaderComponent } from "../header/header.component";
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [UserComponent, HeaderComponent, AsyncPipe],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  protected users$: Observable<Array<IUser>>;
  constructor(private userService: UserService) {
    this.users$ = this.userService.getUsers();
  }
  public onSelectUser(user: IUser): void {
    console.log(user);
  }
}
