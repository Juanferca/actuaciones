import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {EstadoService} from "../../../../../services/actuaciones/estado/estado.service";

@Component({
  selector: 'app-estado-actuacion',
  templateUrl: './estado-actuacion.component.html',
  styleUrls: ['./estado-actuacion.component.css']
})
export class EstadoActuacionComponent implements OnInit {
forma: FormGroup;

  constructor(
    public _estadoServices: EstadoService,
  ) {
    this.forma = new FormGroup({
          nombreEstado: new FormControl('', [Validators.required,
                                                Validators.minLength(3)]),
          comentario: new FormControl(''),
          activoEstado: new FormControl(true),
    });
  }

  ngOnInit() {
  }

  onSubmit() {
    if (this.forma.invalid) {
      return;
    }
    this._estadoServices.crearEstado(this.forma.value).subscribe(
      data => {
        // Vamos a resetaear la data
        this.forma.reset({
          nombreEstado:'',
          comentario: '',
          activoEstado: true
        });

      },
      err => {
        console.log(err);
      }
   );

    console.log(this.forma.value);
  }

}
