import { Component, OnInit } from '@angular/core';

import { SessionService } from '../session.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private sessionService: SessionService) { }

  ngOnInit(): void {
  }

  login(name: string, password: string): void {
    this.sessionService.login(name, password).subscribe();
  }
}
