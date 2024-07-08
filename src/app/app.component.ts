import { Component } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { UserComponent } from './user/user.component';
import { DUMMY_USERS } from '../assets/dummy-users';
import { TaskComponent } from './task/task.component';
import { IUser } from '../constants';



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, UserComponent, TaskComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  users: IUser[] = DUMMY_USERS;
  userSelectedId: string = this.users[0].id;
  get getSelectedUser() {
    return this.users.find((user) => user.id === this.userSelectedId);
  }

  // Event handler for selecting a user
  onSelectUser(id: string) {
    this.userSelectedId = id;
  }
}
