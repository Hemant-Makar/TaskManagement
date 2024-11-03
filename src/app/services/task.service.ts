import { Injectable } from '@angular/core';
import { ITask } from '../models/itask';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  private tasks: Array<ITask> = [
    {
      id: 't1',
      userId: 'u1',
      title: 'Master Angular',
      summary:
        'Learn all the basic and advanced features of Angular & how to apply them.',
      dueDate: '2025-12-31',
      completed: false,
    },
    {
      id: 't2',
      userId: 'u3',
      title: 'Build first prototype',
      summary: 'Build a first prototype of the online shop website',
      dueDate: '2024-05-31',
      completed: false,
    },
    {
      id: 't3',
      userId: 'u3',
      title: 'Prepare issue template',
      summary:
        'Prepare and describe an issue template which will help with project management',
      dueDate: '2024-06-15',
      completed: false,
    },
  ];

  constructor() {
    const tasks = localStorage.getItem('tasks');
    if (tasks) {
      this.tasks = JSON.parse(tasks);
    }
  }
  public getTasks(userId: string): Array<ITask> {
    const tasks = this.tasks.filter(
      (task) => !task.completed && task.userId === userId
    );
    return tasks;
  }

  public addTask(task: ITask, userId: string): void {
    const id = new Date().getTime().toString();
    const newTask: ITask = {
      ...task,
      id,
      userId,
    };
    this.tasks.unshift(newTask);
    this.saveTasks();
  }

  public setTaskComplete(task: ITask): void {
    task.completed = true;
    this.saveTasks();
  }
  private saveTasks(): void {
    localStorage.setItem('tasks', JSON.stringify(this.tasks));
  }
}
