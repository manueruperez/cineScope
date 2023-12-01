import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MoviesRoutingModule } from './movies-routing.module';
import { SharedModule } from '../shared/shared.module';

import { MoviesHomeComponent } from './movies-home/movies-home.component';

@NgModule({
  declarations: [MoviesHomeComponent],
  imports: [CommonModule, MoviesRoutingModule, SharedModule],
})
export class MoviesModule {}
