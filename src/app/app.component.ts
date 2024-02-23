import { Component, Input } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MovieSearchService } from './movie-search.service';
import { CachedDataService } from './cached-data.service';
import { MovieData } from './Movie-Data';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    FormsModule
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',

})

export class AppComponent {

  // @Input() searchTitle!: string;



  title: any;
  searchTitle: any;
  searchTerm: string = '';
  lastSearches: any[] = [];
  movieData: MovieData | null = null;
  dummyData: MovieData = {
    title: "Dummy Title",
    year: "2024",
    rated: "N/A",
    released: "N/A",
    runtime: "N/A",
    genre: "N/A",
    director: "N/A",
    writer: "N/A",
    actors: "N/A",
    plot: "Lorem ipsum dolor sit amet repudiandae? Maiores rerum repudiandae magnamnesciunt distinctio nemo nulla obcaecati, minima porro corrupti expedita laudantium aliquid aspernatur",
    language: "N/A",
    country: "N/A",
    awards: "N/A",
    poster: "https://m.media-amazon.com/images/M/MV5BOTZkNjllMzYtY2ZiNi00YTdkLTg0OTEtZTgzOGY5Njc3NmNiXkEyXkFqcGdeQXVyMTUzMTg2ODkz._V1_SX300.jpg",
    metascore: "N/A",
    imdbRating: "N/A",
    imdbVotes: "N/A",
    imdbID: "N/A",
    type: "N/A",
    dvd: "N/A",
    boxOffice: "N/A",
    production: "N/A",
    website: "N/A",
  }
  error: any = null; // Track potential errors

  constructor(
    private movieSearchService: MovieSearchService,
    private cachedDataService: CachedDataService
  ) { }

  ngOnInit(): void {
    // this.getLastSearches();
    // this.onSearch();
  }


  onSearch():  void {
    this.error = null;

    const searchTerm = this.searchTitle;

    this.movieSearchService.searchMovies(searchTerm)
      .subscribe(
        data => {
          this.movieData = data;
        },
        error => {
          this.error = error; // Handle errors gracefully
          this.dummyData.plot = "page not found";
          this.movieData = this.dummyData
          console.error('Error searching movies:', error);
        }
      );
  }

  getLastSearches(): void {
    this.cachedDataService.getLastSearches()
      .subscribe(
        data => {
          this.lastSearches = data;
        },
        error => {
          this.error = error; // Handle errors gracefully
          console.error('Error fetching cached searches:', error);
        }
      );
  }
}

