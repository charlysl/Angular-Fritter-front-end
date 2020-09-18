import { Component, OnInit } from '@angular/core';

import { Freet } from '../freet';
import { FreetService } from '../freet.service';

@Component({
  selector: 'app-freets',
  templateUrl: './freets.component.html',
  styleUrls: ['./freets.component.css']
})
export class FreetsComponent implements OnInit {

  freets: Freet[];

  constructor(private freetService: FreetService) { }

  ngOnInit(): void {
    this.getFreets();
  }

  getFreets(): void {
    this.freetService.getFreets().subscribe(
      (freets) => {
        this.freets = freets
        console.error(this.freets);
      }
    );
  }

}
