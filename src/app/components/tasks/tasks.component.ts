import { Component, computed, input } from '@angular/core';
import { IUser } from '../../models/iuser.model';
import { TaskComponent } from "./task/task.component";
import { TaskService } from '../../services/task.service';

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [TaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.scss'
})
export class TasksComponent {
  public user = input.required<IUser>();
  protected tasks = computed(() => {
    return this.taskService.getTasks(this.user().id)
  });
  constructor(private taskService: TaskService) {}
}
