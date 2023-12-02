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
  constructor(
    private movieDataService: MovieDataService,
    private router: Router
  ) {}
  ngOnInit(): void {
    this.movieDataService
      .setMoviesList()
      .then(() => (this.movies = this.movieDataService.getMoviesList()));
  }
  handleViewDetails(movieId: number) {
    this.movieDataService.setCurrentMovie(
      this.movies.filter((movie: { id: number }) => movie.id == movieId)[0]
    );
    this.router.navigate(['movies/details']);
  }
  handleAddToWatchlist(movieId: number) {}
}
