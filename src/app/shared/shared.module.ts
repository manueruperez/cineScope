import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { MaterialModule } from '../material.module';
import { MovieCardComponent } from './movie-card/movie-card.component';

@NgModule({
  declarations: [MovieCardComponent],
  imports: [CommonModule, SharedRoutingModule, MaterialModule],
  exports: [MovieCardComponent, MaterialModule],
})
export class SharedModule {}
