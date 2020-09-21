import { Component, OnInit } from '@angular/core';
import { SessionService } from './../session.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  constructor(private sessionService: SessionService) { }

  ngOnInit(): void {
  }

  logout() {
    this.sessionService.logout().subscribe();
  }

}
