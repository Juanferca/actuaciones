import {EventEmitter, Injectable} from '@angular/core';
import {URL_SERVICES} from '../../../config/config';
import {map} from 'rxjs/operators';
import {Encargado} from '../../../models/tablasLookup/encargado';
import {HttpClient} from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class EncargadoService {
  public notificacionEncargado = new EventEmitter<any>();
  totalEncargados = 0;

  constructor(
    public http: HttpClient,
  ) { }

  cargarEncargados () {
    const url = URL_SERVICES + '/actuacion/encargado';
    return this.http.get(url).pipe(
      map((resp: any) => {
        this.totalEncargados = resp.total;
        console.log('La respuesta es:',resp.encargado);
      return resp.encargado;
      }))
  }

    crearEncargado(encargado: Encargado) {

        console.log('Vamos a Crear');
        const url = URL_SERVICES + '/actuacion/encargado';
        // url += '?token=' + this._usuarioService.token;
        return this.http.post(url, encargado).pipe(
          map((resp: any) => {
            swal('Encargado Creado', encargado.nombreEncargado, 'success');
            this.notificacionEncargado.emit();
            console.log('La respuesta es:', resp.encargado);
            return resp.encargado;
          }));
    }



}


