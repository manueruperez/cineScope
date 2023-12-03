import { Component, OnInit } from '@angular/core';
import { Movie } from '../../models/movie.model';
import { MovieDataService } from '../../shared/movie-data-state.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-movies-home',
  templateUrl: './movies-home.component.html',
  styleUrls: ['./movies-home.component.scss'],
})
export class MoviesHomeComponent implements OnInit {
  movies: Movie[] = [];
  filteredMovies: Movie[] = [];
  loading = true;
  constructor(
    private movieDataService: MovieDataService,
    private router: Router
  ) {}
  ngOnInit(): void {
    this.movieDataService.setMoviesList().then(() => {
      this.movies = this.movieDataService.getMoviesList();
      this.filteredMovies = [...this.movies];
      this.loading = false;
    });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.filteredMovies = this.movies.filter((movie) =>
      movie.title.toLowerCase().includes(filterValue)
    );
  }

  sortMovies(sortBy: string) {
    if (sortBy === 'title') {
      this.filteredMovies.sort((a, b) => a.title.localeCompare(b.title));
    } else if (sortBy === 'date') {
      this.filteredMovies.sort(
        (a, b) =>
          new Date(a.releasedDate).getTime() -
          new Date(b.releasedDate).getTime()
      );
    }
  }

  handleViewDetails(movieId: number) {
    this.router.navigate([`movies/details/${movieId}`]);
  }
  handleAddToWatchlist(movieId: number) {}
}
