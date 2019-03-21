import {EventEmitter, Injectable} from '@angular/core';
import {URL_SERVICES} from '../../../config/config';
import {HttpClient} from '@angular/common/http';
import { map, filter } from 'rxjs/operators';
import {Central} from "../../../models/tablasLookup/central.model";
import swal from 'sweetalert';
import {Observable} from "rxjs";


@Injectable({
  providedIn: 'root'
})
export class CentralService {
  public notificacionCentral = new EventEmitter<any>();
  totalCentrales = 0;


  constructor(
    public http: HttpClient,
  ) {}

  cargarCentrales () {
    const url = URL_SERVICES + '/actuacion/central';
    return this.http.get(url).pipe(
      map((resp:any) => { 
        this.totalCentrales = resp.total;
        console.log('La respuesta es:',resp.central);
      return resp.central;
      }))
  }

    crearCentral(central: Central): Observable<Central> {

        console.log('Vamos a Crear', central);
        const url = URL_SERVICES + '/actuacion/central';
        // url += '?token=' + this._usuarioService.token;
        return this.http.post<Central>(url, central).pipe(
          map((resp: any) => {
            swal('Central Creado', central.nombreCentral, 'success');
            this.notificacionCentral.emit();
            console.log('La respuesta es:', resp.central);
            return resp.central;
          }));
    }
}
