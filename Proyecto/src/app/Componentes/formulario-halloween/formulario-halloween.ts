import { F } from '@angular/cdk/keycodes';
import { Component, HostBinding, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ServicioHalloween } from '../../Servicios/servicio-halloween';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatSelectModule} from '@angular/material/select';
import {MatTimepickerModule} from '@angular/material/timepicker';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule, provideNativeDateAdapter } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-formulario-halloween',
imports: [ReactiveFormsModule, MatCheckboxModule, MatSelectModule, MatTimepickerModule,  MatDatepickerModule,
  MatNativeDateModule, MatFormFieldModule, MatInputModule,
],
  templateUrl: './formulario-halloween.html',
  styleUrl: './formulario-halloween.css',
  providers: [provideNativeDateAdapter()],

})

export class FormularioHalloween implements OnInit{
  
@HostBinding('style.backgroundImage') fondo: string = '';
 

disfraces: Disfraz[] = [
    {disfraz: 'Humano', verDisfraz:"Humano"},
    {disfraz: 'Bruja', verDisfraz:"Bruja"},
    {disfraz: 'Vampiro', verDisfraz:"Vampiro"},
    {disfraz: 'Fantasma', verDisfraz:"Fastasma"}
  ];

  ngOnInit(): void {
    this.actualizarFondo();
    this.esHalloween.modoCambiado.subscribe(() => {
    this.actualizarFondo();
    });
  }

  actualizarFondo() {
    this.fondo = `url('${this.esHalloween.modoHalloween('formulario')}')`;
  }

  formulario: FormGroup;

  constructor(private fb: FormBuilder, public esHalloween: ServicioHalloween) {
    
    this.formulario = this.fb.group({
      nombre: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(10)]],
      email: ['', [Validators.required, Validators.email, Validators.minLength(3)]],
      edad: ['', [Validators.required, Validators.min(0)]],
      nombre_halloween: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(10)]],
      email_halloween:['', [Validators.required, Validators.email,]],
      disfraz:['', [Validators.required, Validators.minLength(3)]],
      checkBox: [null, Validators.requiredTrue],
      fechaLlegada: ['', Validators.required] 

    });

  }

  mostrar(){
      if(this.formulario.invalid){
        console.log("El formulario contiene errores.");
      }else {
        console.log(this.formulario.value);
      }
  }


  resetear(){
    this.formulario.reset({
      nombre: '',
      email: ''
    });
  }

  resetearHalloween(){
    this.formulario.reset({
      nombre_halloween: '',
      email_halloween: '',
      disfraz:'',
      checkbox: null,
      fechaLlegada:'',

    });
  }
}



/*--------------------*/
interface Disfraz {
  disfraz:string;
  verDisfraz:string;
}