import { Component, input } from '@angular/core';
import { ITask } from '../../../models/itask';

@Component({
  selector: 'app-task',
  standalone: true,
  imports: [],
  templateUrl: './task.component.html',
  styleUrl: './task.component.scss'
})
export class TaskComponent {
public task = input.required<ITask>();
}
