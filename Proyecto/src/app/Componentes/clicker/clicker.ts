import { Component, HostBinding, OnInit } from '@angular/core';
import { ClickerService } from '../../Servicios/clicker_service';
import { ServicioHalloween } from '../../Servicios/servicio-halloween';

@Component({
  selector: 'app-clicker',
  imports: [],
  templateUrl: './clicker.html',
  styleUrl: './clicker.css'
})
export class Clicker implements OnInit {

  constructor(public clicker:ClickerService, private esHalloween: ServicioHalloween ){

  }

  @HostBinding('style.backgroundImage') fondo: string = '';

    ngOnInit(): void {
    this.actualizarFondo();
    this.esHalloween.modoCambiado.subscribe(() => {
      this.actualizarFondo();
    });
    this.clicker.startAutoClick();
  }

  actualizarFondo() {
    if (this.esHalloween.halloween) {
      this.fondo = `url('${this.esHalloween.modoHalloween('clicker')}')`;
    } else  {
      this.fondo = `url('${this.esHalloween.modoHalloween('clicker')}')`;
    }
  }



}
