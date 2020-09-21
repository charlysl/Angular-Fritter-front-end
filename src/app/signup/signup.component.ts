import { Component, OnInit } from '@angular/core';
import { Utils } from '../utils';

import { UserService } from './../user.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  error = '';

  constructor(private userService: UserService) { }

  ngOnInit(): void {
  }

  signup(name: string, password: string): void {
    this.userService.signup({name, password}).subscribe(
      () => this.error = '',
      (err) => this.error = Utils.mapError(err)
    );
  }

}
