import { Component, Input, OnInit, EventEmitter, Output } from '@angular/core';

import { Freet } from '../freet';

@Component({
  selector: 'app-edit-freet',
  templateUrl: './edit-freet.component.html',
  styleUrls: ['./edit-freet.component.css']
})
export class EditFreetComponent implements OnInit {

  @Input() freet: Freet;
  @Output() notifyEdit = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

}
