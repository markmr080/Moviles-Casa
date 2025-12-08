import { Component, HostBinding } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServicioHalloween } from '../../Servicios/servicio-halloween';
@Component({
  selector: 'app-eye-candy',
  imports: [CommonModule],
  templateUrl: './eye-candy.html',
  styleUrl: './eye-candy.css'
})
export class EyeCandy {

  constructor (private esHalloween: ServicioHalloween) {
}

@HostBinding('style.backgroundImage') fondo: string = '';

  ngOnInit(): void {
    this.actualizarFondo();
    this.esHalloween.modoCambiado.subscribe(() => {
    this.actualizarFondo();
    });
  }

  actualizarFondo() {
    if (this.esHalloween.halloween) {
      this.fondo = `url('${this.esHalloween.modoHalloween('eye-candy')}')`;
    } else  {
      this.fondo = `url('${this.esHalloween.modoHalloween('eye-candy')}')`;
    }
  }



  estadoSonic: 'no' | 'congelado' | 'enfadado' =  'no';
  click: number = 0;
  iniciarAnimacion(){
    this.click++;

    if (this.click == 1) {
      this.estadoSonic = 'congelado';
    }else if (this.click == 2) {
      this.estadoSonic = 'enfadado';
      
    }else {
      this.estadoSonic = 'no';
      this.click = 0;
    }
  }
}