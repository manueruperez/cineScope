import { Injectable } from '@angular/core';
import { Movie } from '../models/movie.model';
import { MoviesService } from './movies.service';

@Injectable({
  providedIn: 'root',
})
export class MovieDataService {
  private currentMovie: Movie | null = null;
  private moviesList: Movie[] = [];

  constructor(private moviesService: MoviesService) {}

  setCurrentMovie(movie: Movie) {
    this.currentMovie = movie;
  }
  getCurrentMovie(): Movie | null {
    return this.currentMovie;
  }
  clearCurrentMovie() {
    this.currentMovie = null;
  }

  async setMoviesList(): Promise<void> {
    try {
      const movies = await this.moviesService.getMovies();
      this.moviesList = movies;
    } catch (error) {
      console.error('Errorgetting movies list:', error);
    }
  }

  getMoviesList(): Movie[] {
    return this.moviesList;
  }
}
