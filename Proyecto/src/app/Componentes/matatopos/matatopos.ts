import { CommonModule } from '@angular/common';
import { Component, HostBinding } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { ServicioHalloween } from '../../Servicios/servicio-halloween';
@Component({
  selector: 'app-matatopos',
  imports: [CommonModule, MatButtonModule],
  templateUrl: './matatopos.html',
  styleUrl: './matatopos.css'
})
export class Matatopos {
 
numero:number=0;

min:number = 1;
max:number = 9;

toposCazados:number =0;
toposFallados:number =0;

constructor (private esHalloween: ServicioHalloween) {
}

@HostBinding('style.backgroundImage') fondo: string = '';

    ngOnInit(): void {
    this.saleTopo();
    this.actualizarFondo();
    this.esHalloween.modoCambiado.subscribe(() => {
      this.actualizarFondo();
    });
  }

  actualizarFondo() {
    if (this.esHalloween.halloween) {
      this.fondo = `url('${this.esHalloween.modoHalloween('matatopos')}')`;
    } else  {
      this.fondo = `url('${this.esHalloween.modoHalloween('matatopos')}')`;
    }
  } 


saleTopo(){
  this.numero =Math.floor(Math.random() * (this.max - this.min + 1) + this.min);
}

resetearTopo() {
  this.toposCazados = 0;
  this.toposFallados = 0;
}

pincharTopo1(){
  
  if(this.numero == 1) {
    console.log ("Has dado al topo");
    this.toposCazados++;
  }else {
    console.log("Has fallado malo");
    this.toposFallados++;
  }
  this.saleTopo();
}

pincharTopo2(){  
  if(this.numero == 2) {
    console.log ("Has dado al topo");
    this.toposCazados++;
  }else {
    console.log("Has fallado malo");
    this.toposFallados++;
  }
  this.saleTopo();
}

pincharTopo3(){
  if(this.numero == 3) {
    console.log ("Has dado al topo");
    this.toposCazados++;
  }else {
    console.log("Has fallado malo");
    this.toposFallados++;
  }
   this.saleTopo();
}
pincharTopo4(){
 
  if(this.numero == 4) {
    console.log ("Has dado al topo");
    this.toposCazados++;
  }else {
    console.log("Has fallado malo");
    this.toposFallados++;
  }
   this.saleTopo();
}
pincharTopo5(){
 
  if(this.numero == 5) {
    console.log ("Has dado al topo");
    this.toposCazados++;
  }else {
    console.log("Has fallado malo");
    this.toposFallados++;
  }
   this.saleTopo();
}
pincharTopo6(){
  
  if(this.numero == 6) {
    console.log ("Has dado al topo");
    this.toposCazados++;
  }else {
    console.log("Has fallado malo");
    this.toposFallados++;
  }
  this.saleTopo();

}
pincharTopo7(){
  

  if(this.numero == 7) {
    console.log ("Has dado al topo");
    this.toposCazados++;
  }else {
    console.log("Has fallado malo");
    this.toposFallados++;
  }

  this.saleTopo();
}
pincharTopo8(){
  
  if(this.numero == 8) {
    console.log ("Has dado al topo");
    this.toposCazados++;
  }else {
    console.log("Has fallado malo");
    this.toposFallados++;
  }
  this.saleTopo();
}
pincharTopo9(){
  
  if(this.numero == 9) {
    console.log ("Has dado al topo");
    this.toposCazados++;
  }else {
    console.log("Has fallado malo");
    this.toposFallados++;
  }
  this.saleTopo();
}
}










