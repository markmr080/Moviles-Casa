import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FichaPersonaje} from '../ficha-personaje/ficha-personaje';
import { Personaje } from '../models/Personaje.model';
@Component({
  selector: 'app-lista-personajes',
  imports: [CommonModule, FichaPersonaje],
  templateUrl: './lista-personajes.html',
  styleUrl: './lista-personajes.css'
})
export class ListaPersonajes implements OnInit{
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  personajes:Personaje[]=[
    { nombre: 'Aragorn', raza: 'Humano', poder: 4, imagen: 'https://sm.ign.com/t/ign_latam/screenshot/default/aragorn11_rmuk.1280.jpg' },
    { nombre: 'Legolas', raza: 'Elfo', poder: 5, imagen: 'https://tierramedia.net/wp-content/uploads/legolas-1-1024x688.jpg' },
    { nombre: 'Gimli', raza: 'Enano', poder: 3, imagen: 'images/gimlii.jpg' },
    { nombre: 'Gandalf', raza: 'Mago', poder: 5, imagen: 'images/gandalf.jpeg' },
    { nombre: 'Thrall', raza: 'Orco', poder: 4, imagen: 'images/thrall.jpg' }
  ];

  
}
