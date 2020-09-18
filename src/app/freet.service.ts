import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

import { Freet } from './freet';

@Injectable({
  providedIn: 'root'
})
export class FreetService {

  private baseUrl = '/api/freet';

  constructor(private http: HttpClient) { }

  getFreets(): Observable<Freet[]> {
    return this.http.get<Freet[]>(this.baseUrl);
  }
}
