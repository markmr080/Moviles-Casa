import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ClickerService {
  
  valorClick:number = 1;
  clicksTotales:number = 0; 
  costeMejora1:number = 10;
  numeroMejoras:number = 0;
  costeMejora2:number = 1000;
  numeroMejoras2:number = 0;

  click(){
    this.clicksTotales += this.valorClick;
  }

  clickMejora1(){
    const valormejora= this.costeMejora1;

    if (this.clicksTotales>=valormejora) {
        this.mejora1();
        this.clicksTotales -= valormejora;
    }else {
      return;
    }
  }
  
  clickMejora2(){
    const valormejora= this.costeMejora2;

    if (this.clicksTotales>=valormejora) {
        this.mejora2();
        this.clicksTotales -= valormejora;
    }else {
      return;
    }
  }
  
  mejora1(){
    this.costeMejora1 = Math.round(this.costeMejora1 * 1.45);

    if (this.numeroMejoras === 0) {
    this.valorClick = 2;
  } else {
    // Mejoras siguientes → +10% por cada compra
    this.valorClick =Math.round(this.valorClick * 1.2) ;
  }

  this.numeroMejoras++;
  }

  mejora2(){
    this.costeMejora2 = Math.round(this.costeMejora2 * 2.45);
    this.valorClick =Math.round(this.valorClick * 1.65) ;
    this.numeroMejoras2++;
  }

}
