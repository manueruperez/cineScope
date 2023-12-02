import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Movie } from '../../models/movie.model';

@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.scss'],
})
export class MovieCardComponent {
  @Input() movie!: Movie;
  @Output() viewDetails = new EventEmitter<number>();
  @Output() addToWatchlist = new EventEmitter<number>();
  onViewDetails() {
    this.viewDetails.emit(this.movie.id);
  }
  onAddToWatchlist() {
    this.addToWatchlist.emit(this.movie.id);
  }
}
