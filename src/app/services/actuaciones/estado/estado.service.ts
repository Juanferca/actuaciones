import {EventEmitter, Injectable} from '@angular/core';
import {URL_SERVICES} from "../../../config/config";
import {map} from "rxjs/operators";
import {HttpClient} from '@angular/common/http';

import {EstadoActuacion} from "../../../models/actuacion/estadoActuacion.model";
declare var swal: any;

@Injectable({
  providedIn: 'root'
})
export class EstadoService {
  public notificacionEstado = new EventEmitter<any>();
  totalEstados = 0;

  constructor(
    public http: HttpClient,
  ) {}

  cargarEstados() {
    const url = URL_SERVICES + '/actuacion/estado';
    return this.http.get(url).pipe(
      map((resp: any) => {
        this.totalEstados = resp.total;
        return resp.estado;
      }));
  }

  crearEstado(estado: EstadoActuacion) {
    console.log('Vamos a Crear');
    const url = URL_SERVICES + '/actuacion/estado';
    // url += '?token=' + this._usuarioService.token;
    return this.http.post(url, estado).pipe(
      map((resp: any) => {
        swal('Estado Creado', estado.nombreEstado, 'success');
        this.notificacionEstado.emit();
        console.log('La respuesta es:', resp.estado);
        return resp.estado;
      }));
  }
}
