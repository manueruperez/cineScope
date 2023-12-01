import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoreRoutingModule } from './core-routing.module';
import { MaterialModule } from '../material.module';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MainLayoutComponent } from './main-layout/main-layout.component';

@NgModule({
  declarations: [HeaderComponent, FooterComponent, MainLayoutComponent],
  imports: [CommonModule, CoreRoutingModule, MaterialModule],
  exports: [MainLayoutComponent, MaterialModule],
})
export class CoreModule {}
