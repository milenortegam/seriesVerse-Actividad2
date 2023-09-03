import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SeriesRoutingModule } from './series-routing.module';
import { LayoutComponent } from './layout/layout.component';
import { SharedModule } from '../shared/shared.module';
import { SerieComponent } from './components/serie/serie.component';
import { SeriesComponent } from './components/series/series.component';
import { NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    LayoutComponent,
    SerieComponent,
    SeriesComponent
  ],
  imports: [
    CommonModule,
    SeriesRoutingModule,
    SharedModule,
    NgbCarouselModule
  ]
})
export class SeriesModule { }
