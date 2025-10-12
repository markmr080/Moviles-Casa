import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Personaje } from '../models/Personaje.model';
@Component({
  selector: 'app-ficha-personaje',
  imports: [CommonModule],
  templateUrl: './ficha-personaje.html',
  styleUrl: './ficha-personaje.css'
})
export class FichaPersonaje {
  @Input() personaj!: Personaje;

estrellas(): string[] {
  return Array(this.personaj.poder).fill('⭐');
}

colorFondo(): string {
  if(this.personaj.raza.toLowerCase() == "humano" ) {
    return '#d0e6f7';
  }
  if(this.personaj.raza.toLowerCase() == "elfo" ) {
    return '#057e3cff';
  }
  if(this.personaj.raza.toLowerCase() == "enano" ) {
    return '#707572ff';
  }
  if(this.personaj.raza.toLowerCase() == "orco" ) {
    return '#5473c7ff';
  }
  if(this.personaj.raza.toLowerCase() == "angel" ) {
    return '#af3c1fff';
  }

  return '#00c5dfff';

}

}