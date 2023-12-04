import { Component } from '@angular/core';
import { MovieDataService } from '../movie-data-state.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Movie } from '../../models/movie.model';

@Component({
  selector: 'app-top-movies-list',
  templateUrl: './top-movies-list.component.html',
  styleUrls: ['./top-movies-list.component.scss'],
})
export class TopMoviesListComponent {
  movie: Movie | null = null;
  topMoviesList: Movie[] = [];
  constructor(
    private movieDataService: MovieDataService,
    private router: Router,
    private route: ActivatedRoute
  ) {}
  ngOnInit() {
    this.loadTopMoviesList();
  }
  private loadTopMoviesList() {
    const topMoviesList = this.movieDataService.getTopMoviesList();
    if (topMoviesList) {
      this.topMoviesList = topMoviesList;
    }
  }

  onSelectMovie(movieId: number) {
    const currentRoute = this.route.snapshot.url.map((param) => param.path);
    const currentMovieId = this.movie?.id;
    if (currentRoute.includes('details') && currentMovieId !== movieId) {
      const newMovie = this.topMoviesList.find((movie) => movie.id === movieId);
      if (newMovie) {
        // window.location.href = `movies/details/${movieId}`;
        this.router.navigate([`movies/details/${movieId}`]);
      }
    }
  }
}
