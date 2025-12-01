import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ClickerService {
  
  valorClick:number = 1;
  clicksTotales:number = 0; 
  costeMejora:number = 10;
  numeroMejoras:number = 0;


  click(){
    this.clicksTotales += this.valorClick;
  }

  clickMejora(){
    const valormejora= this.costeMejora;

    if (this.clicksTotales>=valormejora) {
        this.numeroMejoras+=1;
        this.mejora();
        this.clicksTotales -= valormejora;
    }else {
      return;
    }
  }
  
  mejora(){
    this.costeMejora = Math.round(this.costeMejora * (1.25 * this.numeroMejoras));
    this.valorClick =  Math.round(this.valorClick * this.numeroMejoras);
  }


}
