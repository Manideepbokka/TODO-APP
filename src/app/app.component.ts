import { Component } from '@angular/core';
import { HeaderComponent } from '../components/header/header.component';
import { UserComponent } from '../components/user/user.component';
import { CommonModule } from '@angular/common';
import { DUMMY_USERS } from '../assets/dummy-users';
import { TasksComponent } from "../components/tasks/tasks.component";
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, UserComponent, CommonModule, TasksComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  allUsers=DUMMY_USERS;
  selectedUser: any;

  onSelectionUser(id: string){
    this.selectedUser=this.allUsers.filter(x=>x.id===id);
    console.log(id);
  }

  isSelected(user: any): boolean {
    return this.selectedUser?.id === user.id;
  }
}
