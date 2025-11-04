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
  pi:String="pi piiiiiii";
  esHalloween = false;

  


  constructor(private servicioHalloween:ServicioHalloween) {
  }

  cambiarModo() {
    this.servicioHalloween.cambiarModo(this.esHalloween);
  }
  

  
}