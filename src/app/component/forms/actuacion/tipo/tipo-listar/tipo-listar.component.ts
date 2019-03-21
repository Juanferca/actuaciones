import { Component, OnInit } from '@angular/core';
import {TipoService} from "../../../../../services/actuaciones/tipo/tipo.service";

import {TipoActuacion} from "../../../../../models//actuacion/tipoActuacion.model";

@Component({
  selector: 'app-tippo-listar',
  templateUrl: './tipo-listar.component.html',
  styleUrls: ['./tipo-listar.component.css']
})
export class TipoListarComponent implements OnInit {
  tipos: TipoActuacion [] = [];

  constructor(
    public _tipoServices: TipoService,
  ) { }

  ngOnInit() {
    this.cargarTipos()
  }
  cargarTipos() {
    this._tipoServices.CargarTipos()
      .subscribe(tipo => this.tipos = tipo);
      console.log('tipo')
  }



}
