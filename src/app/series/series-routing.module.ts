import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { SerieComponent } from './components/serie/serie.component';
import { SeriesComponent } from './components/series/series.component';

const routes: Routes = [
  {
      path: '', component: LayoutComponent, children: [
          {
              path: 'series', component: SeriesComponent
          },
          {
              path: '', redirectTo: 'series', pathMatch: 'full'
          },
          {
              path: 'serie/:id', component: SerieComponent
          }
      ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SeriesRoutingModule { }
