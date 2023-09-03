import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SeriesService } from '../../services/series.service';
import { Serie } from 'src/app/core/models/serie/serie.model';

@Component({
  selector: 'app-series',
  templateUrl: './series.component.html',
  styleUrls: ['./series.component.sass']
})
export class SeriesComponent implements OnInit {

  series: Serie[];

  constructor(
    private seriesService: SeriesService,
    private router: Router
    ) {
    this.series = [];
   }
 
  ngOnInit(): void {

    this.seriesService.obtenerSeries().subscribe(
      {
        next: (value) => {
          this.series = value.results;
        }
      }
    )

  }

  verDetalle(id: number){
    this.router.navigate([`/serie/${id}`]).then()
  }
}
