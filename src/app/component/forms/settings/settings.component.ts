import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {EstadoService} from "../../../services/actuaciones/estado/estado.service";


@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit {

  ngOnInit() {
    document.getElementById('sidenav-overlay').style.opacity = "0";
  }


}
