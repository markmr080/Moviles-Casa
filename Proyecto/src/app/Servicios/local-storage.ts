import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorage {
//Almacenar items
  setItem(key:string, item:string){
    localStorage.setItem(key, item);
  }

  getItem(key:string){
    return localStorage.getItem(key);
  }

  removeItem(key:string){
    localStorage.removeItem(key);
  }

  clear(){
    localStorage.clear();
  }

//Almacenar estado de los eventos
  onHalloween(){
    localStorage.setItem('halloween', 'on');
  }
  offHalloween(){
    localStorage.setItem('halloween', 'off');
  }

  isHalloween(){
    if(localStorage.getItem("halloween")==="on"){
      return true;
    }
    return false;
  }

  onNavidad(){
    localStorage.setItem('navidad', 'on');
  }
  offNavidad(){
    localStorage.setItem('navidad', 'off');
  }

  isNavidad(){
    if(localStorage.getItem("navidad")==="on"){
      return true;
    }
    return false;
  }



}
