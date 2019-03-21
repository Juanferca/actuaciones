import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";

import {CentralService} from "../../../../../services/tablasLoockup/central/central.service";

@Component({
  selector: 'app-central-crear',
  templateUrl: './central-crear.component.html',
  styleUrls: ['./central-crear.component.css']
})
export class CentralCrearComponent implements OnInit {
  forma: FormGroup;

  constructor(
    public _centrales : CentralService,
  ) {
    this.forma = new FormGroup({
          'codigo': new FormControl('', [Validators.required,
                                                Validators.minLength(7)]),
          'nombreCentral': new FormControl('', [Validators.required,
                                                Validators.minLength(3)]),
          'provincia': new FormControl('Málaga'),
          'zona': new FormControl('Zona 1'),
          'distancia': new FormControl('', Validators.required),
          'comentarioCentral': new FormControl('',[Validators.required,
                                                Validators.minLength(3)]),
          'activoCentral': new FormControl('true'),
    });
  }

  ngOnInit() {
  }
  
  

  onSubmit() {
    // if (this.forma.invalid) {
    //   return;
    // }
    this._centrales.crearCentral(this.forma.value).subscribe(
      article => {
        console.log(article);
        this.forma.reset({
          codigo:'',
          nombreCentral: '',
          zona: '',
          provincia: '',
          distancia: '',
          comentarioCentral: '',
          activoCentral: true
          });
      },
      err => {
        console.log(err);
      }
   );

    console.log(this.forma.value);
  }

}
