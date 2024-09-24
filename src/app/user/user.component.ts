import { Component, Input, Output, EventEmitter, input, output } from '@angular/core';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
})
export class UserComponent {
  //Option 1 Input decorators (old approach), still used
  @Input({ required: true }) id!: string;
  @Input({ required: true }) avatar!: string;
  @Input({ required: true }) name!: string;
  // Option 2 (new)
  // id = input.required<string>;

  // Option 1 (old, still in use)
  @Output() select = new EventEmitter<string>();
  // Option 2 (quite, modern)
  // select = output<string>(); //Automatically generate the event, so we can emit it in onSelectUser as before

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
