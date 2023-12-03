import { Injectable } from '@angular/core';
import { Movie } from '../models/movie.model';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class WatchlistService {
  private watchListSubject = new BehaviorSubject<Movie[]>(
    this.getWatchListFromLocalStorage()
  );
  watchList$ = this.watchListSubject.asObservable();

  private getWatchListFromLocalStorage(): Movie[] {
    const watchListJson = localStorage.getItem('watchList');
    return watchListJson ? JSON.parse(watchListJson) : [];
  }

  private updateLocalStorage(watchList: Movie[]) {
    localStorage.setItem('watchList', JSON.stringify(watchList));
  }

  addToWatchList(movie: Movie) {
    const currentList = this.watchListSubject.getValue();
    if (!currentList.some((m) => m.id === movie.id)) {
      const updatedList = [...currentList, movie];
      this.watchListSubject.next(updatedList);
      this.updateLocalStorage(updatedList);
    }
  }

  removeFromWatchList(movieId: number) {
    const currentList = this.watchListSubject.getValue();
    const updatedList = currentList.filter((movie) => movie.id !== movieId);
    this.watchListSubject.next(updatedList);
    this.updateLocalStorage(updatedList);
  }
}
