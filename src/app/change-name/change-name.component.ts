import { Component, OnInit } from '@angular/core';
import { Utils } from '../utils';

import { UserService } from './../user.service';

@Component({
  selector: 'app-change-name',
  templateUrl: './change-name.component.html',
  styleUrls: ['./change-name.component.css']
})
export class ChangeNameComponent implements OnInit {

  error = '';

  constructor(private userService: UserService) { }

  ngOnInit(): void {
  }

  changeName(name: string): void {
    this.userService.changeName(name).subscribe(
      () => this.error = '',
      (err) => this.error = Utils.mapError(err)
     );
  }

}
