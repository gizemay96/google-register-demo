import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.scss'],
})
export class RegisterFormComponent implements OnInit {
  userForm = new FormGroup({
    name: new FormControl('', [
      Validators.required, Validators.minLength(3)
    ]),
    lastName: new FormControl('', [
      Validators.required,
      Validators.minLength(2),
    ]),
    email: new FormControl('', [
      Validators.required, Validators.email
    ]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(6),
    ]),
    confirmPass: new FormControl('', [
      Validators.required,
      Validators.minLength(6),
    ]),
  });

  constructor() {}

  ngOnInit(): void {}

  submitForm() {
    if (this.userForm.invalid) {
      console.log('invalid');
    } else {
      console.log(this.userForm.value);
    }
  }
}
