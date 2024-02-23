import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CachedDataService {

  constructor(private http: HttpClient) {}

  getLastSearches(): Observable<any> {
    return this.http.get<any>('http://localhost:5028/api/Movies/cached-data');
  }
}
