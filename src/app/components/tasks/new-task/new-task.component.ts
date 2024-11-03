import { Component, input, output } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { ITask } from '../../../models/itask';
import { TaskService } from '../../../services/task.service';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-new-task',
  standalone: true,
  imports: [ReactiveFormsModule, DatePipe],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.scss',
})
export class NewTaskComponent {
  public close = output();
  public userId = input.required<string>();
  public taskForm!: FormGroup;
  public today = new Date();
  constructor(
    private formBuilder: FormBuilder,
    private taskService: TaskService
  ) {
    this.taskForm = this.formBuilder.group({
      title: ['', Validators.required],
      summary: ['', Validators.required],
      dueDate: ['', Validators.required],
    });
  }
  public onSubmit(): void {
    const task: ITask = this.taskForm.value;
    this.taskService.addTask(task, this.userId());
    this.onCloseDialog();
  }
  public onCloseDialog(): void {
    this.close.emit();
  }
}
