import { Routes } from '@angular/router';
import { Contador } from './Componentes/contador/contador';
import { Matatopos } from './Componentes/matatopos/matatopos';
import { Animacion } from './Componentes/animacion/animacion';
import { ListaPersonajes } from './Componentes/Personajes/lista-personajes/lista-personajes';
import { FichaPersonaje } from './Componentes/Personajes/ficha-personaje/ficha-personaje';
import { FormularioHalloween } from './Componentes/formulario-halloween/formulario-halloween';
import { Clicker } from './Componentes/clicker/clicker';


export const routes: Routes = [
    {path:'contador', component:Contador},
    {path:'matatopos', component:Matatopos},
    {path:'animacion', component:Animacion},
    {path:'lista-personajes', component:ListaPersonajes},
    {path:'ficha-personajes', component:FichaPersonaje},
    {path:'formulario-halloween', component:FormularioHalloween},
    {path:'clicker', component: Clicker},
];
