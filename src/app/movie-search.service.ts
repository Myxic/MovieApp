import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MovieSearchService {

  constructor(private http: HttpClient) {}

  searchMovies(searchTerm: string): Observable<any> {
    const url = `http://localhost:5028/api/Movies/search?title=${searchTerm}`;
    return this.http.get<any>(url);

  }
}
