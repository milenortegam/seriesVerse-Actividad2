import { Component, OnInit, Input } from '@angular/core';
import { Serie } from 'src/app/core/models/serie/serie.model';

@Component({
  selector: 'app-series-similares',
  templateUrl: './series-similares.component.html',
  styleUrls: ['./series-similares.component.sass']
})
export class SeriesSimilaresComponent implements OnInit {

  @Input("series") set changeSeries(series: Serie[]) {
    this.series = series;
  }

  series: Serie[]
  seriesGrupos: Serie[][]

  constructor() {
    this.series = []
    this.seriesGrupos = []
  }

  ngOnInit(): void {
    console.log(this.series.length)

    if (this.series.length > 0) {
      console.log(this.series.length)
      for (let i = 0; i < this.series.length; i += 4) {
        this.seriesGrupos.push(this.series.slice(i, i + 4));
      }
    }
  }

}
