import { Component } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSidenavModule} from '@angular/material/sidenav';
import { RouterLink } from '@angular/router';
@Component({
  selector: 'app-natbar',
  imports: [MatToolbarModule, MatButtonModule, MatIconModule, MatSidenavModule, RouterLink],
  templateUrl: './natbar.html',
  styleUrl: './natbar.css'
})
export class Natbar {
pi:String="pi piiiiiii";


}