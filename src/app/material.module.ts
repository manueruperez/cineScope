import { NgModule } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';

@NgModule({
  declarations: [],
  imports: [
    MatToolbarModule,
    MatIconModule,
    MatDividerModule,
    MatButtonModule,
    MatCardModule,
  ],
  exports: [
    MatToolbarModule,
    MatIconModule,
    MatDividerModule,
    MatButtonModule,
    MatCardModule,
  ],
})
export class MaterialModule {}