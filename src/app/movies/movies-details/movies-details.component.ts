import { Component, OnDestroy, OnInit } from '@angular/core';
import { Movie } from '../../models/movie.model';
import { MovieDataService } from '../../shared/movie-data-state.service';
import { Router } from '@angular/router';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-movies-details',
  templateUrl: './movies-details.component.html',
  styleUrls: ['./movies-details.component.scss'],
})
export class MoviesDetailsComponent implements OnInit, OnDestroy {
  movie: Movie | null = null;
  constructor(
    private movieDataService: MovieDataService,
    private router: Router
  ) {}
  ngOnInit() {
    this.loadMovieDetails();
  }
  ngOnDestroy() {
    this.movieDataService.clearCurrentMovie();
  }
  private loadMovieDetails() {
    const movie = this.movieDataService.getCurrentMovie();
    if (!movie) {
      this.router.navigate(['/']);
      return;
    }
    this.movie = movie;
  }
}
