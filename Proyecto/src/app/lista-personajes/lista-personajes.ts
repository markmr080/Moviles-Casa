import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FichaPersonaje} from '../ficha-personaje/ficha-personaje';
import { FormsModule } from '@angular/forms'; // ✅ Para ngModel
@Component({
  selector: 'app-lista-personajes',
  imports: [CommonModule, FichaPersonaje, FormsModule],
  templateUrl: './lista-personajes.html',
  styleUrl: './lista-personajes.css'
})
export class ListaPersonajes {
   personajes = [
    { nombre: 'Aragorn', raza: 'Humano', poder: 4, imagen: 'https://i.imgur.com/dV1K5lI.jpg' },
    { nombre: 'Legolas', raza: 'Elfo', poder: 5, imagen: 'https://i.imgur.com/8S1n5JX.jpg' },
    { nombre: 'Gimli', raza: 'Enano', poder: 3, imagen: 'https://i.imgur.com/dQ9q4Kk.jpg' },
    { nombre: 'Gandalf', raza: 'Mago', poder: 5, imagen: 'https://i.imgur.com/AnmOuhS.jpg' },
    { nombre: 'Thrall', raza: 'Orco', poder: 4, imagen: 'https://i.imgur.com/8mEzSkJ.jpg' }
  ];

  // ✅ Modelo para el formulario
  nuevoPersonaje = { nombre: '', raza: '', poder: 1, imagen: '' };

  // ✅ Función para añadir personaje
  agregarPersonaje() {
    // Validación básica
    if (!this.nuevoPersonaje.nombre.trim() || !this.nuevoPersonaje.raza.trim()) {
      alert('Por favor, completa el nombre y la raza');
      return;
    }

    // Imagen por defecto si no se proporciona
    if (!this.nuevoPersonaje.imagen.trim()) {
      this.nuevoPersonaje.imagen = 'https://via.placeholder.com/150?text=Personaje';
    }

    // Añadir al array (crea nueva referencia)
    this.personajes = [...this.personajes, { ...this.nuevoPersonaje }];

    // Limpiar formulario
    this.nuevoPersonaje = { nombre: '', raza: '', poder: 1, imagen: '' };
  }

  // ✅ Nuevo método para eliminar
  eliminarPersonaje(nombre: string) {
    this.personajes = this.personajes.filter(p => p.nombre !== nombre);
  }
}
