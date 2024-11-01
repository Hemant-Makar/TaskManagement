import { Component, computed, input, output } from '@angular/core';
import { IUser } from '../../models/iuser.model';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [AsyncPipe],
  templateUrl: './user.component.html',
  styleUrl: './user.component.scss'
})
export class UserComponent {
  public select = output<IUser>();
  public user = input.required<IUser>();
  public imagePath = computed(() => 'assets/users/' + this.user().avatar);
  public onSelectUser(): void {
    this.select.emit(this.user());
  }
}
