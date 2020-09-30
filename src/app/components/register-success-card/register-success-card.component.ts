import { Component, Input, OnInit, Output , EventEmitter } from '@angular/core';
import { User } from 'src/app/types/user.type';

@Component({
  selector: 'app-register-success-card',
  templateUrl: './register-success-card.component.html',
  styleUrls: ['./register-success-card.component.scss']
})
export class RegisterSuccessCardComponent implements OnInit {

  @Input() user:User;
  @Output() turnRegisterPage = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

}
