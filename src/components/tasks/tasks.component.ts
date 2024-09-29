import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskComponent } from "./task/task.component";
import { NewTaskComponent } from './new-task/new-task.component';
import { Task } from './Task';

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [CommonModule, TaskComponent, NewTaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent {

  @Input({required: true}) selectedUserName!: {
    id: string;
    avatar: string;
    name: string;
  }[];

  isAddingNewTask?: boolean = false;
  tasks=[
    {
      id: 't1',
      userId: 'u1',
      title: 'Master Angular',
      summary: 'Learn all the basic and advanced features of Angular & how to apply them!',
      dueDate: '2025-12-31'
    },
    {
      id: 't2',
      userId: 'u3',
      title: 'Build first prototype',
      summary: 'Build a first prototype of the online shop website',
      dueDate: '2024-05-31'
    },
    {
      id: 't3',
      userId: 'u3',
      title: 'Prepare issue template',
      summary: 'Prepare and describe an issue template which will help of project management',
      dueDate: '2025-12-31'
    }
  ];

  get selectedUsertasks(){
    return this.tasks.filter(x => x.userId === this.selectedUserName[0].id);
  }

  deleteTaskFromTasks(taskId: string){
   this.tasks=this.tasks.filter(x=>x.id!=taskId);
  }

  onStartAddTask(){
    this.isAddingNewTask=true;
  }

  onCancelTask(){
    this.isAddingNewTask=false;
  }

  onAddTask(task: Task){
    task.id=new Date().getMilliseconds().toString();
    task.userId=this.selectedUserName[0].id;
    this.tasks.push(task);
    this.isAddingNewTask=false;
  }
}
