import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MoviesRoutingModule } from './movies-routing.module';
import { SharedModule } from '../shared/shared.module';

import { MoviesHomeComponent } from './movies-home/movies-home.component';
import { MoviesDetailsComponent } from './movies-details/movies-details.component';

@NgModule({
  declarations: [MoviesHomeComponent, MoviesDetailsComponent],
  imports: [CommonModule, MoviesRoutingModule, SharedModule],
})
export class MoviesModule {}
