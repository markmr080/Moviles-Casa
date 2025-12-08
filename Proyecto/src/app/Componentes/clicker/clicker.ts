import { Component, HostBinding, OnInit } from '@angular/core';
import { ClickerService } from '../../Servicios/clicker_service';
import { ServicioHalloween } from '../../Servicios/servicio-halloween';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-clicker',
  imports: [CommonModule],
  templateUrl: './clicker.html',
  styleUrl: './clicker.css'
})
export class Clicker implements OnInit {
  public topPosition: string = '0px';
  public leftPosition: string = '0px';

  constructor(public clicker:ClickerService, private esHalloween: ServicioHalloween ){

  }

  @HostBinding('style.backgroundImage') fondo: string = '';
    public isGalletaVisible: boolean = false;
    private tiempoEsperaMin: number = 5000; // 5 segundos
    private tiempoEsperaMax: number = 15000; // 15 segundos

    ngOnInit(): void {
    this.actualizarFondo();
    this.esHalloween.modoCambiado.subscribe(() => {
      this.actualizarFondo();
    });
    this.clicker.startAutoClick();
    this.iniciarGalletaAleatoria();
 
  }

  actualizarFondo() {
    if (this.esHalloween.halloween) {
      this.fondo = `url('${this.esHalloween.modoHalloween('clicker')}')`;
    } else  {
      this.fondo = `url('${this.esHalloween.modoHalloween('clicker')}')`;
    }
    
  }
  //Esta parte esta generada con IA, se encarga de generar aleatoriamente un elemento que nos mejorara o dara algo. 

  iniciarGalletaAleatoria(): void {
  // Inicialmente, no está visible
  this.isGalletaVisible = false;
  this.programarProximaAparicion();
  }

  programarProximaAparicion(): void {
  // Genera un tiempo de espera aleatorio entre el mínimo y el máximo
  const tiempoEspera = Math.floor(Math.random() * (this.tiempoEsperaMax - this.tiempoEsperaMin + 1)) + this.tiempoEsperaMin;

  console.log(`Próxima galleta en ${tiempoEspera / 1000} segundos.`);

  // Programa la aparición
  setTimeout(() => {
    // 1. Calcular nueva posición
    this.generarPosicionAleatoria();
    
    // 2. Hacerla visible (la galleta ya está lista para ser clickeada)
    this.isGalletaVisible = true;
    
    // 3. Opcional: Programar que desaparezca automáticamente si no se clickea después de 5 segundos
    this.programarDesaparicionAutomatica(); 
    
  }, tiempoEspera);
  }

  programarDesaparicionAutomatica(): void {
  // El tiempo de vida de la galleta una vez que aparece (ej: 5 segundos)
  setTimeout(() => {
    // Solo desaparece si todavía está visible (es decir, no ha sido clickeada)
    if (this.isGalletaVisible) {
      this.isGalletaVisible = false;
      // Una vez que desaparece, programamos la siguiente aparición
      this.programarProximaAparicion(); 
    }
  }, 10000); // 10 segundos de vida

  }

  clickGalleta(): void {
  // 1. Ejecutar la lógica de recompensa del servicio
  this.clicker.sumarMejora(); 

  // 2. Ocultar inmediatamente la galleta
  this.isGalletaVisible = false;

  // 3. Programar la siguiente aparición (reemplazando el setTimeout que tenías)
  this.programarProximaAparicion();
  
  // NOTA: Con esta nueva lógica, el tiempoReaparicion ya no es necesario
  // ya que la reaparición se gestiona mediante el nuevo ciclo aleatorio.
  }

  // --- NUEVA FUNCIÓN: CALCULAR POSICIÓN ALEATORIA ---
  generarPosicionAleatoria(): void {
    // 1. Obtener las dimensiones de la ventana
    const anchoVentana = window.innerWidth;
    const altoVentana = window.innerHeight;

    // 2. Definir el tamaño de la imagen (ajusta esto si tu imagen es diferente a 60x60)
    const anchoImagen = 60; 
    const altoImagen = 60;

    // 3. Generar el valor aleatorio (asegurando que no se salga de la pantalla)
    const xAleatorio = Math.floor(Math.random() * (anchoVentana - anchoImagen));
    const yAleatorio = Math.floor(Math.random() * (altoVentana - altoImagen));

    // 4. Asignar los valores a las propiedades con la unidad 'px'
    this.leftPosition = `${xAleatorio}px`;
    this.topPosition = `${yAleatorio}px`;
  }


}
