import { Component } from '@angular/core';
import { ClickerService } from '../../Servicios/clicker_service';

@Component({
  selector: 'app-clicker',
  imports: [],
  templateUrl: './clicker.html',
  styleUrl: './clicker.css'
})
export class Clicker {

  constructor(public clicker:ClickerService){

  }
  
  clickMejora(){
    this.clicker.clickMejora();
  }


}
