import { Component, EventEmitter, Input, Output } from '@angular/core';

import { routes } from '../../../../consts';
import { User } from '../../../../pages/auth/models';

@Component({
  standalone: false,
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent {
  @Input() user: User;
  @Output() signOut: EventEmitter<void> = new EventEmitter<void>();
  public routes: typeof routes = routes;
  public flatlogicEmail: string = "https://flatlogic.com";

  public signOutEmit(): void {
    this.signOut.emit();
  }
}
