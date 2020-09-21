import { Component, OnInit } from '@angular/core';
import { FreetService } from './../freet.service';

@Component({
  selector: 'app-new-freet',
  templateUrl: './new-freet.component.html',
  styleUrls: ['./new-freet.component.css']
})
export class NewFreetComponent implements OnInit {

  constructor(private freetService: FreetService) { }

  ngOnInit(): void {
  }

  createFreet(message: string) {
    this.freetService.createFreet(message).subscribe();
  }

}
