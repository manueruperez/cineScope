import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { MaterialModule } from '../material.module';
import { MovieCardComponent } from './movie-card/movie-card.component';
import { VideoPlayerComponent } from './video-player/video-player.component';
import { TopMoviesListComponent } from './top-movies-list/top-movies-list.component';

@NgModule({
  declarations: [
    MovieCardComponent,
    VideoPlayerComponent,
    TopMoviesListComponent,
  ],
  imports: [CommonModule, SharedRoutingModule, MaterialModule],
  exports: [
    MovieCardComponent,
    VideoPlayerComponent,
    MaterialModule,
    TopMoviesListComponent,
  ],
})
export class SharedModule {}
