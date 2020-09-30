import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../types/user.type';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  serverErrorMessage: string = '';
  // activeUser: User;

  constructor(private http: HttpClient) {}

  post(newUser:User) {
    this.serverErrorMessage = '';
    // check emails available //
    this.http
      .get('http://localhost:3000/users?email=' + newUser.email)
      .subscribe((response: any) => {
        if (response.length === 0) {
          // create user //
          this.http
            .post('http://localhost:3000/users', newUser)
            .subscribe((response: User) => {
              console.log(response)
              return;
            });
        } else {
          this.serverErrorMessage = 'Email Adresi Kullanılıyor';
        }
      });
  }

  getServerError() {
    return this.serverErrorMessage;
  }
}
