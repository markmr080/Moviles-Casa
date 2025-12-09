import { Component, HostBinding } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServicioHalloween } from '../../Servicios/servicio-halloween';
@Component({
  selector: 'app-animacion',
  imports: [CommonModule],
  templateUrl: './animacion.html',
  styleUrl: './animacion.css'
})
export class Animacion {
  
  movChibi1 = { transform: 'translateX(100px)' };
  posX:number=0;
  posY:number=0;
  velocidad:number [] = [];
  numeroChibis:number  = 5;


@HostBinding('style.backgroundImage') fondo: string = '';

  ngOnInit(): void {
    this.actualizarFondo();
    this.esHalloween.modoCambiado.subscribe(() => {
    this.actualizarFondo();
    });
  }

  actualizarFondo() {
    if (this.esHalloween.halloween) {
      this.fondo = `url('${this.esHalloween.modoHalloween('animacion')}')`;
    } else  {
      this.fondo = `url('${this.esHalloween.modoHalloween('animacion')}')`;
    }
  }


  constructor(private esHalloween: ServicioHalloween) {
    for(let i = 0; i<this.numeroChibis; i++){
        let numeroSiRepite;
        let numeroEsta = false;
        do {
          numeroSiRepite = Math.round(Math.random() * 10) + 5;
          numeroEsta = false;
          for(let k = 0; k<this.numeroChibis; k++){
            if (numeroSiRepite == this.velocidad[k]){
              numeroEsta = true;
              break;
            }
          }
        }while(numeroEsta)

       this.velocidad[i] = numeroSiRepite;
    }
  }

  async moverse(){

    this.posX += Math.floor(Math.random() * 50)-25; 
    this.posY += Math.floor(Math.random() * 50)-25; 

    this.movChibi1 = { transform: 'translateX('+this.posX+'px) translateY('+this.posX+'px)' };

  }
}
