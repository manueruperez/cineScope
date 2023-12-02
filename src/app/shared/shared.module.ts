import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { MaterialModule } from '../material.module';
import { MovieCardComponent } from './movie-card/movie-card.component';
import { VideoPlayerComponent } from './video-player/video-player.component';

@NgModule({
  declarations: [MovieCardComponent, VideoPlayerComponent],
  imports: [CommonModule, SharedRoutingModule, MaterialModule],
  exports: [MovieCardComponent, VideoPlayerComponent, MaterialModule],
})
export class SharedModule {}
