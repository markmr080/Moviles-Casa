import { Routes } from '@angular/router';
import { Contador } from './contador/contador';
import { Matatopos } from './matatopos/matatopos';
import { Animacion } from './animacion/animacion';
import { ListaPersonajes } from './lista-personajes/lista-personajes';
import { FichaPersonaje } from './ficha-personaje/ficha-personaje';
import { FormularioHalloween } from './formulario-halloween/formulario-halloween';

export const routes: Routes = [
    {path:'contador', component:Contador},
    {path:'matatopos', component:Matatopos},
    {path:'animacion', component:Animacion},
    {path: 'lista-personajes', component:ListaPersonajes},
    {path: 'ficha-personajes', component:FichaPersonaje},
    {path: "formulario-halloween", component:FormularioHalloween}


];
