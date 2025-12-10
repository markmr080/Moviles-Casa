import { Component, HostBinding, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Animacion } from './Componentes/animacion/animacion';
import { Contador } from './Componentes/contador/contador';
import { Natbar } from './Componentes/natbar/natbar';
import { Matatopos } from './Componentes/matatopos/matatopos';
import { ServicioHalloween } from './Servicios/servicio-halloween';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Animacion, Contador, Natbar, Matatopos],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  @HostBinding('style.backgroundImage') fondo: string = '';

    ngOnInit(): void {
    this.actualizarFondo();
    this.esHalloween.modoCambiado.subscribe(() => {
      this.actualizarFondo();
    });
  }

  actualizarFondo() {
    if (this.esHalloween.halloween) {
      this.fondo = `url('${this.esHalloween.modoHalloween('default')}')`;
    } else  {
      this.fondo = `url('${this.esHalloween.modoHalloween('default')}')`;
    }
  } 

constructor (private esHalloween: ServicioHalloween) {
}
  protected readonly title = signal('Proyecto');
}
