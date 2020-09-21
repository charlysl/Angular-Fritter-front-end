import { Component, OnInit } from '@angular/core';

import { SessionService } from '../session.service';
import { Utils } from '../utils';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(public sessionService: SessionService) { }

  error = '';

  ngOnInit(): void {
  }

  login(name: string, password: string): void {
    this.sessionService.login(name, password).subscribe(
      () => this.error = '', // do nothing
      (err) => this.error = Utils.mapError(err)
    );
  }
}
