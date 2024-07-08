import { Component, computed, input, Input, output, Output } from '@angular/core';

@Component({
  selector: 'app-user',
  standalone: true,
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  avatar = input.required<string>()
  name = input.required<string>()
  getAvatar = computed(() => 'assets/users/' + this.avatar())
}
