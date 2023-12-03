import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MoviesHomeComponent } from './movies-home/movies-home.component';
import { MoviesDetailsComponent } from './movies-details/movies-details.component';

const routes: Routes = [
  { path: '', component: MoviesHomeComponent },
  { path: 'details/:id', component: MoviesDetailsComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MoviesRoutingModule {}
