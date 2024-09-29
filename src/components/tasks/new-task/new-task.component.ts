import { CommonModule } from '@angular/common';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Task } from '../Task';

@Component({
  selector: 'app-new-task',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css'
})
export class NewTaskComponent implements OnInit {

  task!: Task;

  ngOnInit(): void {
    this.task={
      id: '',
      userId: '',
      title: '',
      summary: '',
      dueDate: ''
    };
  }

  @Output() cancel=new EventEmitter<void>();
  @Output() add=new EventEmitter<Task>();

  
  onCancel() {
    this.cancel.emit();
  }

  submitForm(){
    this.add.emit(this.task);
  }

}
