import { Component, OnInit } from '@angular/core';
import { Task } from '../../models/task.model';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {
    taskList: Task[] = [];
    taskName = '';
  constructor() { }

  ngOnInit(): void {
  }
    addTask(): void {
      if (this.taskName === '') {
          return;
      }
      const TASK: Task = {
          name: this.taskName,
          status: false
      };
      this.taskList.push(TASK);
      console.log(this.taskList);
      this.taskName = '';
    }

    removeTask(index: number): void {
        this.taskList.splice(index, 1);
    }

    updateStatus(task: Task, index: number): void {
      this.taskList[index].status = !task.status;
    }
}
