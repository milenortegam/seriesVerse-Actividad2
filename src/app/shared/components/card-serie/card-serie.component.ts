import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Serie } from 'src/app/core/models/serie/serie.model';

@Component({
  selector: 'app-card-serie',
  templateUrl: './card-serie.component.html',
  styleUrls: ['./card-serie.component.sass']
})
export class CardSerieComponent {

  @Input("serie") set changeSerie(serie: Serie) {
    this.serie = serie
  }

  serie: Serie | null

  constructor(private router: Router) {
    this.serie = null
  }

  abrirSerie() {
    this.router.navigate([`/serie/${this.serie?.id}`]).then(() => {
      // Recargar los datos del componente actual
      window.location.reload()
    });
  }
} 
