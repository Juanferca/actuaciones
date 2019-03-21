import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-aignacion-actuacion-crear',
  templateUrl: './asignacion-actuacion-crear.component.html',
  styleUrls: ['./asignacion-actuacion-crear.component.css']
})
export class AsignacionActuacionCrearComponent implements OnInit {
forma: FormGroup;

  constructor() {
    this.forma = new FormGroup({
          fechaAsignacion: new FormControl('', [Validators.required,
                                                Validators.minLength(3)]),
          brigada: new FormControl('', [Validators.required,
                                                  Validators.minLength(5)]),
          prioridadBrigada: new FormControl(''),
          obsAsig: new FormControl(''),
    });
  }

  ngOnInit() {
  }

  onSubmit() {
    if (this.forma.invalid) {
      return;
    }
    console.log(this.forma.value);
  }

}
