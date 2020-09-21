import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';

import { User } from './user';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private baseUrl = '/api/user';

  private httpOptions = {
    headers: {
      'Content-Type': 'application/json'
    }
  };

  constructor(private http: HttpClient) { }

  signup( user: User ): Observable<any> {
    return this.http.post(this.baseUrl,
                          user,
                          this.httpOptions)
    .pipe(
      catchError((err) => this._handleError(err))
    );
  }

  changeName(name: string) : Observable<any> {
    return this.http.put( this.baseUrl,
                          {name},
                          this.httpOptions)
    .pipe(
      catchError((err) => this._handleError(err))
    );
  }

  changePassword(password: string): Observable<any> {
    return this.http.put(this.baseUrl, {password}, this.httpOptions);
  }

  deleteUser(): Observable<any> {
    return this.http.delete(this.baseUrl);
  }

  _handleError(err): Observable<never> {
    if (err.status === 403) {
      return throwError(new Error('DuplicateName'));
    } else {
      console.error('Caught unexpected error', err);
      return throwError(new Error('UnexpectedError'));
    }
}
}
