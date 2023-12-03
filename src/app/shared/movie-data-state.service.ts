import { Injectable } from '@angular/core';
import { Movie } from '../models/movie.model';
import { MoviesService } from './movies.service';

@Injectable({
  providedIn: 'root',
})
export class MovieDataService {
  private moviesList: Movie[] = [];

  constructor(private moviesService: MoviesService) {}

  getMovieById(movieId: number): Movie | null {
    return this.moviesList.find((movie) => movie.id === movieId) ?? null;
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

  getTopMoviesList(): Movie[] {
    return this.getMoviesList()
      .slice()
      .sort((a, b) => b.rating - a.rating)
      .slice(0, 5);
  }
}
