import { Component, OnDestroy, OnInit } from '@angular/core';
import { Movie } from '../../models/movie.model';
import { MovieDataService } from '../../shared/movie-data-state.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Subject, takeUntil } from 'rxjs';
import { WatchlistService } from '../../shared/watchlist.service';

@Component({
  selector: 'app-movies-details',
  templateUrl: './movies-details.component.html',
  styleUrls: ['./movies-details.component.scss'],
})
export class MoviesDetailsComponent implements OnInit, OnDestroy {
  private destroy$ = new Subject<void>();
  movie: Movie | null = null;
  isInWatchList: boolean = false;

  constructor(
    private movieDataService: MovieDataService,
    private watchlistService: WatchlistService,
    private router: Router,
    private route: ActivatedRoute
  ) {}
  ngOnInit() {
    this.route.paramMap.pipe(takeUntil(this.destroy$)).subscribe((params) => {
      const idParam = params.get('id');
      if (!idParam || isNaN(+idParam)) {
        this.router.navigate(['/']);
        return;
      }
      const movieId = +idParam;
      this.loadMovieDetails(movieId);
    });
  }
  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }

  subscribeTowatchList() {
    this.watchlistService.watchList$
      .pipe(takeUntil(this.destroy$))
      .subscribe((watchList) => {
        if (this.movie) {
          this.isInWatchList = watchList.some((m) => m.id === this.movie!.id);
        }
      });
  }

  onAddToWatchlist() {
    if (this.movie) {
      this.watchlistService.addToWatchList(this.movie);
    }
  }

  onRemoveToWatchlist() {
    if (this.movie) {
      this.watchlistService.removeFromWatchList(this.movie.id);
    }
  }
  private loadMovieDetails(movieId: number) {
    this.movieDataService.setMoviesList().then(() => {
      const movie = this.movieDataService.getMovieById(movieId);
      if (!movie) {
        this.router.navigate(['/']);
        return;
      }
      this.movie = movie;
      this.subscribeTowatchList();
    });
  }
}
