import { Component } from '@angular/core';
import { UserComponent } from "./components/user/user.component";
import { HeaderComponent } from "./components/header/header.component";
import { AsyncPipe } from '@angular/common';
import { Observable } from 'rxjs';
import { IUser } from './models/iuser.model';
import { UserService } from './services/user.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [UserComponent, HeaderComponent, AsyncPipe],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'TaskManagement';
  protected users$: Observable<Array<IUser>>;
  constructor(private userService: UserService) {
    this.users$ = this.userService.getUsers();
  }
  public onSelectUser(user: IUser): void {
    console.log(user);
  }
}
