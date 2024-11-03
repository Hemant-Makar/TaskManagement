import { Component, input } from '@angular/core';
import { IUser } from '../../models/iuser.model';
import { TaskComponent } from './task/task.component';
import { TaskService } from '../../services/task.service';
import { ITask } from '../../models/itask';
import { EAddTaskDialogState } from '../../app.constants';
import { NewTaskComponent } from './new-task/new-task.component';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [TaskComponent, NewTaskComponent, AsyncPipe],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.scss',
})
export class TasksComponent {
  public user = input.required<IUser>();
  protected addTaskDialogState = EAddTaskDialogState.Close;
  constructor(private taskService: TaskService) {}

  public get getUserTasks(): Array<ITask> {
    return this.taskService.getTasks(this.user().id);
  }

  public onOpenAddTaskDialog(): void {
    this.addTaskDialogState = EAddTaskDialogState.Open;
  }
  public onCloseAddTask(): void {
    this.addTaskDialogState = EAddTaskDialogState.Close;
  }
}
