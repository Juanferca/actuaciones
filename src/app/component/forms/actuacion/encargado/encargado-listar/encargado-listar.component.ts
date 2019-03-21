import { Component, OnInit } from '@angular/core';
import {EncargadoService} from "../../../../../services/actuaciones/encargado/encargado.service";

import {Encargado} from "../../../../../models/tablasLookup/encargado";
declare var swal:any;

@Component({
  selector: 'app-encargado-listar',
  templateUrl: './encargado-listar.component.html',
  styleUrls: ['./encargado-listar.component.css']
})
export class EncargadoListarComponent implements OnInit {
  encargados:Encargado [] = [];

  constructor(
    public _encargadoServices: EncargadoService
  ) { }

  ngOnInit() {
    this.cargarEncargados()
  }
   cargarEncargados() {
    // const url = 'http://localhost:3000/actuacion/central';
    // this.httpClient
    //   .get(url)
    //   .subscribe(apiData => (this.centrales = apiData.central));
    this._encargadoServices.cargarEncargados()
      .subscribe(encargados => this.encargados = encargados);
  }

}
