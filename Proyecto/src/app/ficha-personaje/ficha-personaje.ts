import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-ficha-personaje',
  imports: [CommonModule],
  templateUrl: './ficha-personaje.html',
  styleUrl: './ficha-personaje.css'
})
export class FichaPersonaje {
  @Input() personaje!: { nombre: string; raza: string; poder: number; imagen: string };
  @Output() eliminar = new EventEmitter<string>(); // ✅ Emitirá el nombre o ID del personaje

  getColorFondo(): string {
    switch (this.personaje.raza.toLowerCase()) {
      case 'humano': return '#d0e6f7';
      case 'elfo': return '#3e413dff';
      case 'orco': return '#f7d0d0';
      case 'enano': return '#f7e7d0';
      case 'mago': return '#e0d0f7';
      default: return '#f0f0f0';
    }
  }

  getEstrellas(): string[] {
    return Array(this.personaje.poder).fill('⭐');
  }

  eliminarPersonaje() {
    this.eliminar.emit(this.personaje.nombre); // ✅ Notifica al padre
  }

  
}