import {EventEmitter, Injectable} from '@angular/core';
import {URL_SERVICES} from "../../../config/config";
import {map} from 'rxjs/operators';
import {HttpClient} from '@angular/common/http';
import {TipoActuacion} from '../../../models/actuacion/tipoActuacion.model';
import swal from 'sweetalert';

@Injectable({
  providedIn: 'root'
})
export class TipoService {
  public notificacionTipo = new EventEmitter<any>();
  totalTipos = 0;
  
  constructor(
    public http: HttpClient
  ) { }

  CargarTipos () {
    const url = URL_SERVICES + '/actuacion/tipoActuacion';
    return this.http.get(url).pipe(
      map((resp:any) => {
        this.totalTipos = resp.total;
        console.log('La respuesta es:',resp.tipoActuacion);
      return resp.tipoActuacion;
      }))
  }

  crearEncargado(tipo: TipoActuacion) {

        console.log('Vamos a Crear');
        const url = URL_SERVICES + '/actuacion/tipoActuacion';
        // url += '?token=' + this._usuarioService.token;
        return this.http.post(url, tipo).pipe(
          map((resp: any) => {
            swal('Tipo Creado', tipo.nombreTipoActuacion, 'success');
            this.notificacionTipo.emit();
            console.log('La respuesta es:', resp.tipoActuacion);
            return resp.tipoActuacion;
          }));
    }
}
