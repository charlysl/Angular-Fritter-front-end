import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-freet-search',
  templateUrl: './freet-search.component.html',
  styleUrls: ['./freet-search.component.css']
})
export class FreetSearchComponent implements OnInit {

  @Output() notifySearch = new EventEmitter();
  @Output() notifySort = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

}
