import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {TipoService} from "../../../../../services/actuaciones/tipo/tipo.service";

@Component({
  selector: 'app-tipo-crear',
  templateUrl: './tipo-crear.component.html',
  styleUrls: ['./tipo-crear.component.css']
})
export class TipoCrearComponent implements OnInit {
forma: FormGroup;

  constructor(
    public _tipoServices: TipoService
  ) {
    this.forma = new FormGroup({
          nombreTipoActuacion: new FormControl('', [Validators.required,
                                                Validators.minLength(3)]),
          descripcionTippoActuacion: new FormControl(''),
          activoTipoActuacion: new FormControl('true'),
    });
  }

  ngOnInit() {
  }

  onSubmit() {
    if (this.forma.invalid) {
      return;
    }
    this._tipoServices.crearEncargado(this.forma.value).subscribe(
      article => {
        console.log(article);
        this.forma.reset({
          nombreTipoActuacion:'',
          descripcionTippoActuacio: '',
          activoTipoActuacion: true
          });
      },
      err => {
        console.log(err);
      }
   );

    console.log(this.forma.value);
  }

}
