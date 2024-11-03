import { Component, input, output } from '@angular/core';
import { ITask } from '../../../models/itask';
import { DatePipe } from '@angular/common';
import { TaskService } from '../../../services/task.service';

@Component({
  selector: 'app-task',
  standalone: true,
  imports: [DatePipe],
  templateUrl: './task.component.html',
  styleUrl: './task.component.scss',
})
export class TaskComponent {
  public complete = output<ITask>();
  public task = input.required<ITask>();
  constructor(private taskService: TaskService) {}
  public onTaskComplete(): void {
    this.taskService.setTaskComplete(this.task());
  }
}
