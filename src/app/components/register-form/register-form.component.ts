import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { CustomvalidationService } from 'src/app/validations/customvalidation.service';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.scss'],
})
export class RegisterFormComponent implements OnInit {
  formError: boolean = false; // will be true if the userForm is invalid

  userForm = new FormGroup(
    {
      name: new FormControl('', [Validators.required, Validators.minLength(3)]),
      lastName: new FormControl('', [
        Validators.required,
        Validators.minLength(2),
      ]),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(6),
      ]),
      confirmPassword: new FormControl(''),
    },
    {
      validators: this.customValidator.MatchPassword(
        'password',
        'confirmPassword'
      ),
    }
  );

  //    ----  GET ERRORS  ---- //
  get nameErrors() {
    return this.userForm.controls.name.errors;
  }

  get lastnameErrors() {
    return this.userForm.controls.lastName.errors;
  }

  get emailErrors() {
    return this.userForm.controls.email.errors;
  }

  get passwordErrors() {
    return this.userForm.controls.password.errors;
  }

  get confirmPasswordErrors() {
    return this.userForm.controls.confirmPassword.errors;
  }

  constructor(private customValidator: CustomvalidationService) {}

  ngOnInit(): void {}

  submitForm() {
    if (this.userForm.invalid) {
      console.log('invalid', this.userForm);
      this.formError = true;
    } else {
      console.log(this.userForm);
    }
  }
}
