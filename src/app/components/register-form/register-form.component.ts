import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';
import { CustomvalidationService } from 'src/app/validations/customvalidation.service';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.scss'],
})
export class RegisterFormComponent implements OnInit {
  @Output() successForm = new EventEmitter();
  @Output() newUser = new EventEmitter();

  formError: boolean = false; // will be true if the userForm is invalid
  isLoading: boolean = false;
  showPassword: boolean = false; // Password will appear when true .
  showInputText: boolean = false; // hidden focus text will appear when true .

  userForm = new FormGroup(
    {
      name: new FormControl('', [Validators.required, Validators.minLength(3)]),
      lastName: new FormControl('', [
        Validators.required,
        Validators.minLength(2),
      ]),
      email: new FormControl(
        '',
        Validators.compose([
          Validators.required,
          this.customValidator.emailValidator(),
        ])
      ),
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
  //    ----  GET SERVER ERROR  ---- //

  get ServerErrorMessage() {
    return this.userService.getServerError();
  }

  constructor(
    private customValidator: CustomvalidationService,
    private userService: UserService
  ) {}

  ngOnInit(): void {}

  submitForm() {
    this.isLoading = true;
    // form control //
    if (this.userForm.invalid) {
      this.formError = true;
      this.isLoading = false;
    }
    // create user  //
    else {
      this.userService.post(this.userForm.value);
      setTimeout(() => {
        // server error control //
        if (this.ServerErrorMessage) {
          this.isLoading = false;
        } else {
          this.isLoading = false;
          this.newUser.emit(this.userForm.value);
          this.successForm.emit();
        }
      }, 400);
    }
  }
}
