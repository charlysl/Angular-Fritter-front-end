import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SessionService {

  loggedInName: string;

  private baseUrl = '/api/session';

  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  constructor(private http: HttpClient) { }

  login(name: string, password: string): Observable<any> {
    // TODO handle login error
    return this.http.post( `${this.baseUrl}/login`,
                          {name, password},
                          this.httpOptions)
    .pipe(
      tap( _ => this.loggedInName = name ),
      catchError((err: any): any => {
        if (err.status === 403) {
          return throwError(new Error('InvalidCredentials'));
        } else {
          console.error('Caught unexpected error', err);
          return throwError(new Error('UnexpectedError'));
        }
      })
    );
  }

  logout(): Observable<any> {
    return this.http.delete(`${this.baseUrl}/logout`)
    .pipe(
      tap(_ => this.loggedInName = '')
    );
  }

}
