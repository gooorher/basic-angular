import { Component } from '@angular/core';

import { HeaderComponent } from './header/header.component';
import { UserComponent } from './user/user.component';
import { DUMMY_USERS } from './dummy-users';
import { TasksComponent } from './tasks/tasks.component';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'], 
  imports: [HeaderComponent, UserComponent, TasksComponent],
})
export class AppComponent {
  users = DUMMY_USERS;
  selectedUserId: string | null = null;

  onSelectUser(id: string) {
    console.log('Selected user with ID: ' + id);
    this.selectedUserId = id;
  }

  get selectedUser() {
    return this.users.find((user) => user.id === this.selectedUserId)!;
  }
}