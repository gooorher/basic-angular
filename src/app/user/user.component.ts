import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
})
export class UserComponent {
  //Input decorators (old approach), still used
  @Input({ required: true }) id!: string;
  @Input({ required: true }) avatar!: string;
  @Input({ required: true }) name!: string;
  @Output() select = new EventEmitter();

  get imagePath() {
    return 'assets/users/' + this.avatar;
  }

  //Functions, quite modern
  //   avatar = input.required<string>();
  //   name = input.required<string>();

  // imagePath = computed (() => {
  //     return 'assets/users/' + this.avatar;

  // });

  onSelectUser() {
    this.select.emit(this.id);
  }
}
