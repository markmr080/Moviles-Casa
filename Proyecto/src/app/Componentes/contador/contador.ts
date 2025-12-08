import { Component, HostBinding, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServicioHalloween } from '../../Servicios/servicio-halloween';
@Component({
  selector: 'app-contador',
  imports: [CommonModule],
  templateUrl: './contador.html',
  styleUrl: './contador.css'
})
export class Contador implements OnInit{


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
      this.fondo = `url('${this.esHalloween.modoHalloween('contador')}')`;
    } else  {
      this.fondo = `url('${this.esHalloween.modoHalloween('contador')}')`;
    }
  } 

  numero:number = 0;

  incrementar(){
    if (this.numero>=10){
      this.numero = 10;
    }else{
      this.numero++;
    }
  }

  decrementar(){
    if(this.numero>0) {
      this.numero--;
     }else {
      this.numero = 0;
     }
  }

  resetear(){
    this.numero=0;
  }


}

