import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavComponent } from './components/nav/nav.component';
import { SeriesSimilaresComponent } from './components/series-similares/series-similares.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CardSerieComponent } from './components/card-serie/card-serie.component';



@NgModule({
  declarations: [
    NavComponent,
    SeriesSimilaresComponent,
    CardSerieComponent
  ],
  imports: [
    CommonModule,
    NgbModule
  ],
  exports: [
    NavComponent,
    SeriesSimilaresComponent
  ]
})
export class SharedModule { }
