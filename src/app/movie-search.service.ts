import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MovieSearchService {

  constructor(private http: HttpClient) {}

  searchMovies(searchTerm: string): Observable<any> {
    return this.http.post<any>('http://localhost:5028/api/Movies/search', { searchTerm });
  }
}
