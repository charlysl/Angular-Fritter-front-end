import { Component, OnInit } from '@angular/core';
import { Session } from 'protractor';

import { UserService } from '../user.service';
import { SessionService } from './../session.service';

@Component({
  selector: 'app-delete-user',
  templateUrl: './delete-user.component.html',
  styleUrls: ['./delete-user.component.css']
})
export class DeleteUserComponent implements OnInit {

  constructor(private userService: UserService,
              private sessionService: SessionService) { }

  ngOnInit(): void {
  }

  deleteUser(): void {
    this.userService.deleteUser().subscribe(_ => {
      this.sessionService.logout().subscribe();
    });
  }

}
