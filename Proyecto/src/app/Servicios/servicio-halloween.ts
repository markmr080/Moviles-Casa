import { EventEmitter, Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServicioHalloween {
  
  halloween:boolean = false;

  modoCambiado = new EventEmitter<boolean>();

  cambiarModo(esHalloween:boolean) {
    this.halloween = esHalloween;
    this.modoCambiado.emit(this.halloween);

  }
  modoHalloween(componente: string): string {
    let fondoNormal = '';
    let fondoHalloween = '';

    switch (componente) {
      case 'formulario':
        fondoNormal = 'https://img.freepik.com/fotos-premium/fondo-formularios-digitales-abstractos-forma-trapcode-puntos-lineas-brillantes-fondo_799261-292.jpg';
        fondoHalloween = 'https://static.vecteezy.com/system/resources/previews/003/305/280/non_2x/halloween-festivity-background-free-vector.jpg';
        break;

      case 'lista_personajes':
        fondoNormal = 'https://bnetcmsus-a.akamaihd.net/cms/template_resource/5828I8W26TV51590014180482.jpg';
        fondoHalloween = 'https://wallpapers.com/images/hd/1920-x-1080-halloween-4925ne46656fn279.jpg';
        break;

      case 'inicio':
        fondoNormal = 'https://img.freepik.com/vector-premium/fondo-blanco-lineas-suaves_8829-2298.jpg';
        fondoHalloween = 'https://img.freepik.com/vector-premium/fondo-halloween-oscuro-calabaza-brillante_389765-305.jpg';
        break;

      default:
        fondoNormal = 'https://img.freepik.com/foto-gratis/textura-fondo-claro_23-2147740373.jpg';
        fondoHalloween = 'https://img.freepik.com/vector-gratis/fondo-halloween-calabaza-espeluznante_23-2149073449.jpg';
        break;
    }

    if (this.halloween == true){
      return fondoHalloween;
    }else {
      return fondoNormal
    }
  }


}
