import { Component, OnInit } from '@angular/core';
import {CentralService} from "../../../../../services/tablasLoockup/central/central.service";
import {Central} from "../../../../../models/tablasLookup/central.model";


@Component({
  selector: 'app-central-listar',
  templateUrl: './central-listar.component.html',
  styleUrls: ['./central-listar.component.css']
})
export class CentralListarComponent implements OnInit {
  centrales: [];


  constructor(

    public _centralServices : CentralService,
  ) { }

  ngOnInit() {
    this.cargarCentrales()
  }

    cargarCentrales() {
    // const url = 'http://localhost:3000/actuacion/central';
    // this.httpClient
    //   .get(url)
    //   .subscribe(apiData => (this.centrales = apiData.central));
    this._centralServices.cargarCentrales()
      .subscribe(centrales => this.centrales = centrales);
  }

}
