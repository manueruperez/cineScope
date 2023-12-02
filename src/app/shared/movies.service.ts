import { Injectable } from '@angular/core';
import { Movie } from '../models/movie.model';
import { MOVIES } from '../data/movies.data';

@Injectable({
  providedIn: 'root',
})
export class MoviesService {
  constructor() {}
  getMovies(): Promise<Movie[]> {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(MOVIES);
      }, 1000);
    });
  }
}
