import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-tasks',
  standalone: true,
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent {
//   @Input({required:true}) selectedUser!: any;
@Input({required:true}) name: string | undefined;
}