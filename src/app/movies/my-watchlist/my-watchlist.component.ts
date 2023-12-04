import { Component } from '@angular/core';
import { WatchlistService } from '../../shared/watchlist.service';
import { Movie } from '../../models/movie.model';

@Component({
  selector: 'app-my-watchlist',
  templateUrl: './my-watchlist.component.html',
  styleUrls: ['./my-watchlist.component.scss'],
})
export class MyWatchlistComponent {
  watchlistMovies: Movie[] = [];
  constructor(private watchlistService: WatchlistService) {}
  ngOnInit(): void {
    this.watchlistService.watchList$.subscribe((watchList) => {
      this.watchlistMovies = watchList;
    });
  }
  goToMovieDetails(id: number) {
    window.location.href = `movies/details/${id}`;
  }
  removeFromWatchlist(id: number) {
    this.watchlistService.removeFromWatchList(id);
  }
}
