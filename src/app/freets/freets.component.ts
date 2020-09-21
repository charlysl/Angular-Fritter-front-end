import { Component, OnInit } from '@angular/core';

import { Freet } from '../freet';
import { FreetService } from '../freet.service';
import { SessionService} from '../session.service';

@Component({
  selector: 'app-freets',
  templateUrl: './freets.component.html',
  styleUrls: ['./freets.component.css']
})
export class FreetsComponent implements OnInit {

  freets: Freet[] = [];
  author = '';
  isSorted = false;

  constructor(private freetService: FreetService,
              public sessionService: SessionService) { }

  ngOnInit(): void {
    this.getFreets();
    this._subscribeToNewFreets();
  }

  getFreets(): void {
    this.freetService.getFreets().subscribe(
      (freets) => this._setFreets(freets)
    );
  }

  upvote(freet: Freet): void {
    this._vote(true, freet);
  }

  downvote(freet: Freet): void {
    this._vote(false, freet);
  }

  _vote(isUp: boolean, freet: Freet): void {
    const fn = isUp ? 'upvote' : 'downvote';
    const delta = isUp ? 1 : -1;
    this.freetService[fn](freet).subscribe( _ => {
      freet.votes = freet.votes + delta;
      this._sortFreetsAfterMutation();
    });
  }

  onEdit(freet: Freet): void {
    this.freetService.editFreet(freet).subscribe();
  }

  deleteFreet(freet: Freet, index: number): void {
    this.freetService.deleteFreet(freet).subscribe(_ => {
      this.freets.splice(index, 1);
    });
  }

  searchFreets(author: string): void {
    this.freetService.searchFreets(author).subscribe(
      (freets: Freet[]) => this._setFreets(freets)
    );
  }

  sortFreets(isSorted: any): void {
    this.isSorted = isSorted;
    const prop = isSorted ? 'votes' : 'order';
    this.freets.sort((a: Freet, b: Freet): number => {
      return a[prop] < b[prop] ? 1 : -1;
    });
  }

  _subscribeToNewFreets(): void {
    this.freetService.newFreets$.subscribe(
      (freet) => this._addFreet(freet)
    );
  }

  /**
   * Assign an order to the freets, so that they
   * can be "unsorted"
   */
  _orderFreets(): void {
    for (let i = 0; i !== this.freets.length; i++) {
      this.freets[i].order = this.freets.length - 1 - i;
    }
  }

  /**
   * Always use this method to set this.freets
   */
  _setFreets(freets: Freet[]): void {
    this.freets = freets;
    this._orderFreets();
    this._sortFreetsAfterMutation();
  }

  _addFreet(freet: Freet): void {
    freet.order = this.freets.length;
    this.freets.push(freet);
    this._sortFreetsAfterMutation();
  }

  /**
   * This method must be called after making any
   * change to any freets that might affect their
   * sorting, i.e. getting freets, adding a new freet,
   * voting.
   */
  _sortFreetsAfterMutation(): void {
    if (this.isSorted) {
      this.sortFreets(this.isSorted);
    }
  }
}
