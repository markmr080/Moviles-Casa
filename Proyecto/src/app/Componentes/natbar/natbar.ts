import { Component, OnInit } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import {MatToolbarModule} from '@angular/material/toolbar';
import { RouterLink } from '@angular/router';
import {MatMenuModule} from '@angular/material/menu';
import { CommonModule } from '@angular/common';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import { FormsModule } from '@angular/forms';
import { ServicioHalloween } from '../../Servicios/servicio-halloween';
import { LocalStorage } from '../../Servicios/local-storage';



@Component({
  selector: 'app-natbar',
  imports: [MatToolbarModule,  MatIconModule,  RouterLink, MatSlideToggleModule, FormsModule, CommonModule, MatMenuModule],
  templateUrl: './natbar.html',
  styleUrl: './natbar.css'
})

export class Natbar implements OnInit{
  esHalloween = false;
  esNavidad = false;

  constructor(
    private servicioHalloween: ServicioHalloween, private localSto: LocalStorage) {}


  ngOnInit(): void {
    this.esHalloween=this.localSto.isHalloween();
    this.esNavidad=this.localSto.isNavidad();

    if (this.esHalloween) {
      this.servicioHalloween.cambiarModo(true);
      this.servicioHalloween.cambiarModoNavidad(false); 
    } else if (this.esNavidad) {
      this.servicioHalloween.cambiarModo(false);
      this.servicioHalloween.cambiarModoNavidad(true);
  }
}

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
    
    this.estadoHalloween();
    this.estadoNavidad();
  }

  estadoHalloween(){
    if(this.esHalloween) {
      this.localSto.onHalloween();
    }else {
      this.localSto.offHalloween();
    }
  }
  estadoNavidad(){
    if(this.esNavidad) {
      this.localSto.onNavidad();
    }else {
      this.localSto.offNavidad();
    }
  }




}