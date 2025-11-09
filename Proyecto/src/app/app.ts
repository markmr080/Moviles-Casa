import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Animacion } from './Componentes/animacion/animacion';
import { Contador } from './Componentes/contador/contador';
import { Natbar } from './Componentes/natbar/natbar';
import { Matatopos } from './Componentes/matatopos/matatopos';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Animacion, Contador, Natbar, Matatopos],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Proyecto');
}
