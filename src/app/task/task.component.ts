import { Component, Input, input } from '@angular/core';

@Component({
  selector: 'app-task',
  standalone: true,
  imports: [],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css'
})
export class TaskComponent {
  /* 
  Angular 17 version 
  id = input.required<string>() 
  */
  @Input() id!: string;
}
