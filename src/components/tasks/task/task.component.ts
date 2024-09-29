import { Component , EventEmitter, Input, Output } from '@angular/core';
import { Task } from '../Task';

@Component({
  selector: 'app-task',
  standalone: true,
  imports: [],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css'
})
export class TaskComponent {

  @Input({required: true}) task!: Task;
  @Output() completeTaskEvent=new EventEmitter();


  completeTask(id: string){
    this.completeTaskEvent.emit(id);
  }
}
