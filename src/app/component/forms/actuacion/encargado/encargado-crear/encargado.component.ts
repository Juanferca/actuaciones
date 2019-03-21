import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {EncargadoService} from '../../../../../services/actuaciones/encargado/encargado.service';


@Component({
  selector: 'app-encargado',
  templateUrl: './encargado.component.html',
  styleUrls: ['./encargado.component.css']
})
export class EncargadoComponent implements OnInit {

  forma: FormGroup;

  constructor(
    public _encargado : EncargadoService,
  ) {
    this.forma = new FormGroup({
          'nombreEncargado': new FormControl('', [Validators.required,
                                                Validators.minLength(7)]),
          'comentarioEncargado': new FormControl('', [Validators.required,
                                                Validators.minLength(3)]),

          'activoEncargado': new FormControl('true'),
    });
  }

  ngOnInit() {
   
  }



  onSubmit() {
    console.log('entra')
    this._encargado.crearEncargado(this.forma.value).subscribe(
      data => {
       
        // Vamos a resetaear la data
        this.forma.reset({
          nombreEncargado:'',
          comentarioEncargado: '',
          activoEncargado: true
        });

      },
      err => {
        console.log(err);
      }
   );

    console.log(this.forma.value);
  }

}
