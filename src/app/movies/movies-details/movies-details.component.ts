import { Component, OnDestroy, OnInit } from '@angular/core';
import { Movie } from '../../models/movie.model';
import { MovieDataService } from '../../shared/movie-data-state.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-movies-details',
  templateUrl: './movies-details.component.html',
  styleUrls: ['./movies-details.component.scss'],
})
export class MoviesDetailsComponent implements OnInit, OnDestroy {
  private destroy$ = new Subject<void>();
  movie: Movie | null = null;

  constructor(
    private movieDataService: MovieDataService,
    private router: Router,
    private route: ActivatedRoute
  ) {}
  ngOnInit() {
    this.route.paramMap.pipe(takeUntil(this.destroy$)).subscribe((params) => {
      const movieId = +params.get('id')!;
      this.loadMovieDetails(movieId);
    });
  }
  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
  private loadMovieDetails(movieId: number) {
    const movie = this.movieDataService.getMovieById(movieId);
    if (!movie) {
      this.router.navigate(['/']);
      return;
    }
    this.movie = movie;
  }
}
