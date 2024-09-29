import { Component, EventEmitter, Input, Output } from '@angular/core';

import { DUMMY_USERS } from '../../assets/dummy-users';

const randomIndex=Math.floor(Math.random() * DUMMY_USERS.length);



@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {

  @Input({required: true}) selectedUser: any;
  @Output() select=new EventEmitter();
  @Input() selected!: boolean;
  // selectedUser= DUMMY_USERS[randomIndex];

  get imagePath(){
    return 'assets/users/' + this.selectedUser.avatar;
  }
  onSelectedUser(event: Event){
    this.select.emit(this.selectedUser.id);
    // const randomIndex=Math.floor(Math.random() * DUMMY_USERS.length);
    // this.selectedUser= DUMMY_USERS[randomIndex];
  }
}
