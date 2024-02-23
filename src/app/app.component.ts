import { Component, OnInit } from '@angular/core';
import { AppModule } from './app.module';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MovieSearchService } from './movie-search.service';
import { CachedDataService } from './cached-data.service';
import { throwError } from 'rxjs';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [AppModule,
    RouterOutlet,
    FormsModule,
    HttpClientModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent implements OnInit {
  title: any;
searchTitle: any;
 searchTerm: string = '';
  searchResults: any[] = [];
  lastSearches: any[] = [];

  constructor(
    private movieSearchService: MovieSearchService,
    private cachedDataService: CachedDataService
  ) {}

  ngOnInit(): void {
    this.getLastSearches();
  }

  onSearch(): void {
    this.movieSearchService.searchMovies(this.searchTerm)
      .subscribe(data => {
        this.searchResults = data;
      }, error => {
        // Handle error here
        
      });
  }

  getLastSearches(): void {
    this.cachedDataService.getLastSearches()
      .subscribe(data => {
        this.lastSearches = data;
      }, error => {
        // Handle error here
      });
  }
}

