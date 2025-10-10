import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Animacion } from './animacion/animacion';
import { Contador } from './contador/contador';
import { Natbar } from './natbar/natbar';
import { Matatopos } from './matatopos/matatopos';
import { Menu } from './menu/menu';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Animacion, Contador, Natbar, Menu, Matatopos],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Proyecto');
}
