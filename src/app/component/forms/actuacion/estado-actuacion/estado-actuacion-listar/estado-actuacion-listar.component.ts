import { Component, OnInit } from '@angular/core';
import {EstadoService} from "../../../../../services/actuaciones/estado/estado.service";
import { EstadoActuacion } from '../../../../../models/actuacion/estadoActuacion.model';


@Component({
  selector: 'app-estado-actuacion-listar',
  templateUrl: './estado-actuacion-listar.component.html',
  styleUrls: ['./estado-actuacion-listar.component.css']
})
export class EstaActuLiComponent implements OnInit {
  estados: EstadoActuacion [] = [];

  constructor(
    public _estadoServices: EstadoService
  ) { }

  ngOnInit() {
    this.cargarEstados()
  }
  cargarEstados() {
    this._estadoServices.cargarEstados()
      .subscribe(estados => {
       this.estados = estados;
      
      });
     
  }
 


}
