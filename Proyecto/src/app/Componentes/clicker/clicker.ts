import { Component, HostBinding, HostListener, OnInit } from '@angular/core';
import { ClickerService } from '../../Servicios/clicker_service';
import { ServicioHalloween } from '../../Servicios/servicio-halloween';
import { CommonModule } from '@angular/common';
import { LocalStorage } from '../../Servicios/local-storage';
@Component({
  selector: 'app-clicker',
  imports: [CommonModule],
  templateUrl: './clicker.html',
  styleUrl: './clicker.css'
})
export class Clicker implements OnInit {
  public topPosition: string = '0px';
  public leftPosition: string = '0px';

  constructor(public clicker:ClickerService, private esHalloween: ServicioHalloween, private localSto:LocalStorage ){

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
    this.cargarEstado();

    setInterval(() => {
        this.guardarEstado();
        console.log('Partida Guardada.'); 
    }, 5000); 
  }

  actualizarFondo() {
    if (this.esHalloween.halloween) {
      this.fondo = `url('${this.esHalloween.modoHalloween('clicker')}')`;
    } else  {
      this.fondo = `url('${this.esHalloween.modoHalloween('clicker')}')`;
    }
    
  }
  //IA
  @HostListener('window:beforeunload', ['$event'])
    unloadNotification($event: any) {
      console.log('Guardando estado antes de salir...');
      this.guardarEstado();
  }
    
  cargarEstado(){       
  //Con el String (this.clicker.valor) se asigna por defecto el valor que tiene en el servicio en caso de que sea null
  //Metodo parseInt() pasa a int la string que se obtiene del localStorage 
    this.clicker.clicksTotales = parseInt(this.localSto.getItem('clicker.ClicksTotales') || String(this.clicker.clicksTotales));
    this.clicker.valorClick = parseInt(this.localSto.getItem('clicker.ValorClick') || String(this.clicker.valorClick));

    this.clicker.totalMejoraAuto = parseInt(this.localSto.getItem('clicker.TotalMejoraAuto') || String(this.clicker.totalMejoraAuto));
    this.clicker.costeMejoraAuto = parseInt(this.localSto.getItem('clicker.CosteMejoraAuto') || String(this.clicker.costeMejoraAuto));


    this.clicker.costeMejora1 = parseInt(this.localSto.getItem('clicker.CosteMejora1') || String(this.clicker.costeMejora1));
    this.clicker.numeroMejoras = parseInt(this.localSto.getItem('clicker.NumeroMejoras1') || String(this.clicker.numeroMejoras)); 
    

    this.clicker.costeMejora2 = parseInt(this.localSto.getItem('clicker.CosteMejora2') || String(this.clicker.costeMejora2));
    this.clicker.numeroMejoras2 = parseInt(this.localSto.getItem('clicker.NumeroMejoras2') || String(this.clicker.numeroMejoras2)); 
  
    this.clicker.costeMejora3 = parseInt(this.localSto.getItem('clicker.CosteMejora3') || String(this.clicker.costeMejora3));
    this.clicker.numeroMejoras3 = parseInt(this.localSto.getItem('clicker.NumeroMejoras3') || String(this.clicker.numeroMejoras3));
  }

  //Se guarda el estado actual de los parametros del clicker
  //Metodo String() sirve para pasar los int de los valores a String para poder almacenarlo.
  guardarEstado(){
    this.localSto.setItem('clicker.ClicksTotales', String(this.clicker.clicksTotales));
    this.localSto.setItem('clicker.ValorClick', String(this.clicker.valorClick));
    this.localSto.setItem('clicker.TotalMejoraAuto', String(this.clicker.totalMejoraAuto));
    this.localSto.setItem('clicker.CosteMejoraAuto', String(this.clicker.costeMejoraAuto));
    this.localSto.setItem('clicker.CosteMejora1', String(this.clicker.costeMejora1));
    this.localSto.setItem('clicker.NumeroMejoras1', String(this.clicker.numeroMejoras));
    this.localSto.setItem('clicker.CosteMejora2', String(this.clicker.costeMejora2));
    this.localSto.setItem('clicker.NumeroMejoras2', String(this.clicker.numeroMejoras2));
    this.localSto.setItem('clicker.CosteMejora3', String(this.clicker.costeMejora3));
    this.localSto.setItem('clicker.NumeroMejoras3', String(this.clicker.numeroMejoras3));
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

  console.log(`Próximo evento en ${tiempoEspera / 1000} segundos.`);

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
