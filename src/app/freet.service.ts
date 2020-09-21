import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';

import { Freet } from './freet';
import { SessionService } from './session.service';

@Injectable({
  providedIn: 'root'
})
export class FreetService {

  readonly newFreets$ = new Subject<Freet>();

  private baseUrl = '/api/freet';

  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  constructor(private http: HttpClient,
              private sessionService: SessionService) { }

  getFreets(): Observable<Freet[]> {
    return this.searchFreets('');
  }

  createFreet(message: string): Observable<any> {
    const postOptions = {
      observe: 'response' as 'body',
      ...this.httpOptions
    };

    return this.http.post(this.baseUrl, {message}, postOptions)
    .pipe(
      tap((res: HttpResponse<any>) => {
        this._publishNewFreet(message, res);
      })
    );
  }

  upvote(freet: Freet): Observable<any> {
    return this._vote(freet, 'up');
  }

  downvote(freet: Freet): Observable<any> {
    return this._vote(freet, 'down');
  }

  editFreet(freet: Freet): Observable<any> {
    return this.http.put( this._getFreetUrl(freet),
                          {message: freet.message},
                          this.httpOptions);
  }

  deleteFreet(freet: Freet): Observable<any> {
    return this.http.delete(this._getFreetUrl(freet));
  }

  searchFreets(author: string): Observable<Freet[]> {
    const query = author ? `?author=${author}` : '';
    const url = `${this.baseUrl}${query}`;
    return this.http.get<Freet[]>(url)
    .pipe(
      map((freets: Freet[]) => freets ? freets : [])
    );
  }

  private _vote(freet: Freet, direction: string): Observable<any> {
    const url = `${this._getFreetUrl(freet)}/vote`;
    return this.http.post(url, {direction}, this.httpOptions);
  }

  private _getFreetUrl(freet: Freet): string {
    return `${this.baseUrl}/${freet.freet_id}`;
  }

  private _publishNewFreet(message: string, res: HttpResponse<any>): void {
    const location = res.headers.get('location');
    const freetId = location.match(/.*\/([^\/]+)$/)[1];
    const freet = this._createFreetObject(freetId, message);
    this.newFreets$.next(freet);
}

  private _createFreetObject( freetId: string,
                              message: string): Freet {
    return {
      freet_id: freetId,
      author: this.sessionService.loggedInName,
      message,
      votes: 0
    } as Freet;
  }
}
