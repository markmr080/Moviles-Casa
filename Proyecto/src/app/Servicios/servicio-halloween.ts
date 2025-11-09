import { EventEmitter, Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServicioHalloween {
  
  halloween:boolean = false;
  navidad:boolean = false;

  modoCambiado = new EventEmitter<boolean>();

  cambiarModo(esHalloween:boolean) {
    this.halloween = esHalloween;
    this.modoCambiado.emit(this.halloween);
  }
  cambiarModoNavidad(esNavidad: boolean){
    this.navidad = esNavidad;
    this.modoCambiado.emit(this.navidad);

  }

  modoHalloween(componente: string): string {
    let fondoNormal = '';
    let fondoHalloween = '';
    let fondoNavidad = '';

    switch (componente) {
      case 'formulario':
        fondoNormal = 'https://img.freepik.com/fotos-premium/fondo-formularios-digitales-abstractos-forma-trapcode-puntos-lineas-brillantes-fondo_799261-292.jpg';
        fondoHalloween = 'https://static.vecteezy.com/system/resources/previews/003/305/280/non_2x/halloween-festivity-background-free-vector.jpg';
        fondoNavidad = 'https://wallpapers.com/images/hd/1920x1080-hd-christmas-a4w9iz29xd804afm.jpg';
        break;

      case 'lista_personajes':
        fondoNormal = 'https://bnetcmsus-a.akamaihd.net/cms/template_resource/5828I8W26TV51590014180482.jpg';
        fondoHalloween = 'https://wallpapers.com/images/hd/1920-x-1080-halloween-4925ne46656fn279.jpg';
        fondoNavidad = 'https://wallpapers.com/images/hd/1920x1080-hd-christmas-a4w9iz29xd804afm.jpg';
        break;

      case 'matatopos':
        fondoNormal = 'https://m.media-amazon.com/images/I/61-fg1fwlpL.jpg';
        fondoHalloween = 'https://t3.ftcdn.net/jpg/09/43/63/48/360_F_943634824_INJVs29yVWLTGj5ofpTYFJnluOf04qga.jpg';
        fondoNavidad = 'https://img3.wallspic.com/crops/9/2/0/6/66029/66029-el_dia_de_navidad-invierno-decoracion_de_la_navidad-nieve-navidad-1921x1080.jpg';
        break;

      default:
        fondoNormal = '';
        fondoHalloween = '';
        break;
    }

    if (this.halloween == true){
      return fondoHalloween;
    }else if (this.navidad == true){
      return fondoNavidad;
    }else {
      return fondoNormal;
    }
  }


}
