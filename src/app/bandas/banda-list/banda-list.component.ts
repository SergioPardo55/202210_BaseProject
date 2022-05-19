import { Component, OnInit } from '@angular/core';
import { Banda } from '../banda';
import { BandaService } from '../banda.service';

@Component({
  selector: 'app-banda-list',
  templateUrl: './banda-list.component.html',
  styleUrls: ['./banda-list.component.css']
})
export class BandaListComponent implements OnInit {

  bandas: Banda[] = [];
  promedio: number=0;

  selectedBanda!: Banda;
  activate: boolean=false;
  onSelected(Banda: Banda): void {
    this.activate = true;
    this.selectedBanda = Banda;
  }
  constructor(private bandaService: BandaService) { }

  promedioMiembros(bandas: Banda[]): number {
    let suma: number = 0;
    for (let banda of bandas) {
      suma += banda.numberOfMembers;
    }
    return Math.round(suma / bandas.length);
  }
  getBandas(): void {
    this.bandaService.getBandas().subscribe(bandas => this.funcion(bandas));

  }
  funcion(bandas: Banda[]) {
    this.bandas = bandas;
    this.promedio = this.promedioMiembros(bandas);
  }
  ngOnInit() {
    this.getBandas();
  }

}
