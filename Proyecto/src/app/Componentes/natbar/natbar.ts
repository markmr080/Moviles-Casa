import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import {MatToolbarModule} from '@angular/material/toolbar';
import { RouterLink } from '@angular/router';
import {MatMenuModule} from '@angular/material/menu';
import { CommonModule } from '@angular/common';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import { FormsModule } from '@angular/forms';
import { ServicioHalloween } from '../../Servicios/servicio-halloween';



@Component({
  selector: 'app-natbar',
  imports: [MatToolbarModule,  MatIconModule,  RouterLink, MatSlideToggleModule, FormsModule, CommonModule, MatMenuModule],
  templateUrl: './natbar.html',
  styleUrl: './natbar.css'
})
export class Natbar {
esHalloween = false;
  esNavidad = false;

  constructor(
    private servicioHalloween: ServicioHalloween,
  ) {}

  cambiarModo(modo: 'halloween' | 'navidad') {
    if (modo === 'halloween' && this.esHalloween) {
      this.esNavidad = false;
      this.servicioHalloween.cambiarModoNavidad(false);
      this.servicioHalloween.cambiarModo(true);
    } else if (modo === 'navidad' && this.esNavidad) {
      this.esHalloween = false;
      this.servicioHalloween.cambiarModo(false);
      this.servicioHalloween.cambiarModoNavidad(true);
    } else {
      this.servicioHalloween.cambiarModo(false);
      this.servicioHalloween.cambiarModoNavidad(false);
    }
  }
  
}