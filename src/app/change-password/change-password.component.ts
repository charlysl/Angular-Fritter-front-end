import { Component, OnInit } from '@angular/core';
import { UserService } from './../user.service';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent implements OnInit {

  constructor(private userService: UserService) { }

  ngOnInit(): void {
  }

  changePassword(password: string): void {
    this.userService.changePassword(password).subscribe();
  }

}
