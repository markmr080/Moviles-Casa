import { Component, HostBinding, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FichaPersonaje} from '../ficha-personaje/ficha-personaje';
import { Personaje } from '../models/Personaje.model';
import { ServicioHalloween } from '../../Servicios/servicio-halloween';
@Component({
  selector: 'app-lista-personajes',
  imports: [CommonModule, FichaPersonaje],
  templateUrl: './lista-personajes.html',
  styleUrl: './lista-personajes.css'
})
export class ListaPersonajes implements OnInit{

@HostBinding('style.backgroundImage') fondo: string = '';
ngOnInit(): void {
    this.actualizarFondo();

    this.esHalloween.modoCambiado.subscribe(() => {
      this.actualizarFondo();
    });
  }

  actualizarFondo() {
    this.fondo = `url('${this.esHalloween.modoHalloween('lista_personajes')}')`;
  }

constructor (private esHalloween: ServicioHalloween) {
}

   personajes:Personaje[]=[
    { nombre: 'Anduin', raza: 'Humano', poder: 4, imagen: 'https://upload.wikimedia.org/wikipedia/en/a/a5/Anduin_Wrynn_by_Erik_Braddock.jpg' },
    { nombre: 'Malfurion', raza: 'Elfo', poder: 5, imagen: 'https://bnetcmsus-a.akamaihd.net/cms/gallery/ARP5A1V3X2DG1400551405290.jpg' },
    { nombre: 'Magni Barbabronce', raza: 'Enano', poder: 3, imagen: 'https://wow.zamimg.com/uploads/screenshots/normal/900122-magni-barbabronce.jpg' },
    { nombre: 'Zul`jin', raza: 'Troll', poder: 5, imagen: 'https://warcraft.wiki.gg/images/thumb/Zul%27Aman_Classic_key_art.jpg/320px-Zul%27Aman_Classic_key_art.jpg?333079' },
    { nombre: 'Thrall', raza: 'Orco', poder: 4, imagen: 'images/thrall.jpg' }
  ];
 

  
}
