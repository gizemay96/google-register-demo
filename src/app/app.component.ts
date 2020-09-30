import { Component } from '@angular/core';
import { User } from './types/user.type';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'google-register-demo';

  registerSuccess: boolean = false;
  newUser: User;

  getNewUser(newUser: User) {
    this.newUser = newUser;
  }
}
