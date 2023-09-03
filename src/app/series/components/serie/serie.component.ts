import { Component, OnInit } from '@angular/core';
import { SeriesService } from '../../services/series.service';
import { Serie } from 'src/app/core/models/serie/serie.model';
import { Backdrop } from 'src/app/core/models/img/imagenes-serie.model';
import { ActivatedRoute, Router } from '@angular/router';
import { catchError, of, tap } from 'rxjs';

@Component({
  selector: 'app-serie',
  templateUrl: './serie.component.html',
  styleUrls: ['./serie.component.sass']
})
export class SerieComponent implements OnInit {

  serie: Serie | null;
  seriesSimilares: Serie[];
  backdrops: Backdrop[];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private seriesService: SeriesService
    ) {
    this.serie = null;
    this.seriesSimilares = [];
    this.backdrops = [];
   }

   ngOnInit(): void {
      this.route.params.subscribe(
        {
          next: params => {
            const id = params['id']

            if(!id || isNaN(id)){
              console.log('sin id');
              this.router.navigate(['/series']);
              return;
            }

            this.obtenerDetalle(id);
            this.obtenerImagenes(id);
            this.obtenerSeriesSimilares(id);
          },
          error: error => {
            console.log(error);
          }
        }
      )
    }

    private obtenerDetalle(id: number) {
      this.seriesService.obtenerDetalle(id).pipe(
        tap(serie => this.serie = serie),
        catchError(error => {
          console.error('Error al obtener detalle de la serie:', error);
          return of(null);
        })
      ).subscribe();
    }
  
    private obtenerImagenes(id: number) {
      this.seriesService.obtenerImagenes(id).pipe(
        tap(res => this.backdrops = res.backdrops),
        catchError(error => {
          console.error('Error al obtener imágenes de la serie:', error);
          return of({ posters: [] });
        })
      ).subscribe();
    }
  
    private obtenerSeriesSimilares(id: number) {
      this.seriesService.obtenerSimilares(id).subscribe({
        next: res => {
          this.seriesSimilares = res.results
        },
        error: err => console.error(err)
      })
    }



}
