import { Component } from '@angular/core';
import { DUMMY_USERS } from '../dummy-users';

const random_index = Math.floor(Math.random() * DUMMY_USERS.length);
@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})

export class UserComponent {
  selectedUser = DUMMY_USERS[random_index];

  get imagePath() {
    return 'assets/users/' + this.selectedUser.avatar;
  }


  onSelectUser() {
    console.log('Clicked!');
    //Generamos otro número aleatorio para cambiar si o sí de usuario cuando hacemos click 
    const random_index = Math.floor(Math.random() * DUMMY_USERS.length);
    this.selectedUser = DUMMY_USERS[random_index]
    //this.selectedUser.set(DUMMY_USERS); ¿Por qué no funciona?
  }

}

