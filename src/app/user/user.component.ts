import { Component, computed, EventEmitter, input, Input, output, Output } from '@angular/core';
import { IUser } from '../../constants';

@Component({
  selector: 'app-user',
  standalone: true,
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  /* 
  Angular 17 version

  avatar = input.required<string>()
  name = input.required<string>()
  id = input.required<string>()
  select = output<string>()
  getAvatar = computed(() => 'assets/users/' + this.avatar())
  onSelectUser() { this.select.emit(this.id()) } 
  
  */

  // Angular 16- version
  @Input() user?: IUser;
  @Output() select = new EventEmitter<string>()

  get getAvatar() {
    return 'assets/users/' + this.user?.avatar;
  }

  onSelectUser() { this.select.emit(this.user?.id) }
}