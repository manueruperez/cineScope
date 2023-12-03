import {
  Component,
  EventEmitter,
  Input,
  OnDestroy,
  OnInit,
  Output,
} from '@angular/core';
import { Movie } from '../../models/movie.model';
import { WatchlistService } from '../watchlist.service';

@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.scss'],
})
export class MovieCardComponent implements OnInit {
  @Input() movie!: Movie;
  @Output() viewDetails = new EventEmitter<number>();
  @Output() addToWatchlist = new EventEmitter<Movie>();
  @Output() removeToWatchlist = new EventEmitter<number>();

  isInWatchList: boolean = false;

  constructor(private watchlistService: WatchlistService) {}

  ngOnInit() {
    this.watchlistService.watchList$.subscribe((watchList) => {
      this.isInWatchList = watchList.some((m) => m.id === this.movie.id);
    });
  }

  onViewDetails() {
    this.viewDetails.emit(this.movie.id);
  }
  onAddToWatchlist() {
    this.addToWatchlist.emit(this.movie);
  }
  onRemoveToWatchlist() {
    this.removeToWatchlist.emit(this.movie.id);
  }
}
