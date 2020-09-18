import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SessionService {

  private baseUrl = '/api/session';

  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  constructor(private http: HttpClient) { }

  login(name: string, password: string): Observable<any> {
    // TODO handle login error
    return this.http.post(this.baseUrl + '/login',
                          {name, password},
                          this.httpOptions);
  }
}
