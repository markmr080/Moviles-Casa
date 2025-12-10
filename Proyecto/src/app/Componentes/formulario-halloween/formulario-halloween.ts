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
import { LocalStorage } from '../../Servicios/local-storage';

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

    ngOnInit(): void {
    this.actualizarFondo();
    this.esHalloween.modoCambiado.subscribe(() => {
      this.actualizarFondo();
    });
  }

  actualizarFondo() {
    if (this.esHalloween.halloween) {
      this.fondo = `url('${this.esHalloween.modoHalloween('formulario')}')`;
    } else  {
      this.fondo = `url('${this.esHalloween.modoHalloween('formulario')}')`;
    }
  } 

  formulario: FormGroup;
  formularioHalloween: FormGroup;

  constructor(private fb: FormBuilder, public esHalloween: ServicioHalloween, private localSto: LocalStorage) {
    
    this.formulario = this.fb.group({
      nombre: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(10)]],
      email: ['', [Validators.required, Validators.email, Validators.minLength(3)]],
      edad: ['', [Validators.required, Validators.min(0)]],
    });


    this.formularioHalloween = this.fb.group({
      nombre_halloween: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(10)]],
      email_halloween:['', [Validators.required, Validators.email,]],
      disfraz:['', [Validators.required, Validators.minLength(3)]],
      checkBox: [false, Validators.requiredTrue],
      fechaLlegada: [null, Validators.required] 
    });
  }
  disfraces: Disfraz[] = [
    {disfraz: 'Humano', verDisfraz:"Humano"},
    {disfraz: 'Bruja', verDisfraz:"Bruja"},
    {disfraz: 'Vampiro', verDisfraz:"Vampiro"},
    {disfraz: 'Fantasma', verDisfraz:"Fastasma"}
  ];
  mostrar(){
      if(this.formulario.invalid){
        console.log("El formulario contiene errores.");
      }else {
        console.log(this.formulario.value);
        this.guardarEstadoFN();
      }
  }

  mostrarHalloween(){
      if(this.formularioHalloween.invalid){
        console.log("El formulario contiene errores.");
        alert("🩸¡Este formulario no asustaria a nadie, rellenalo!👻");
      }else {
        console.log(this.formularioHalloween.value);
         this.guardarEstadoFH()
         alert("🎃 ¡Bienvenido/a, " + this.formularioHalloween.get('nombre_halloween')?.value + " Tu entrada para la fiesta del castillo ha sido registrada con éxito.");
        
      }
  }


  resetear(){
    this.formulario.reset({
      nombre: '',
      email: ''
    });
  }

  resetearHalloween(){
    this.formularioHalloween.reset({
      nombre_halloween: '',
      email_halloween: '',
      disfraz:'',
      checkbox: false,
      fechaLlegada:null,

    });
  }
  //FN = FormularioNormal
  guardarEstadoFN(){
    this.localSto.setItem('form.nombre', this.formulario.value.nombre)
    this.localSto.setItem('form.email', this.formulario.value.email)
    this.localSto.setItem('form.edad', this.formulario.value.edad)

  }
  //FH = FormularioHalloween
  guardarEstadoFH(){
    this.localSto.setItem('form.nombre_Halloween', this.formularioHalloween.value.nombre_halloween)
    this.localSto.setItem('form.email_Halloween', this.formularioHalloween.value.email_halloween)
    this.localSto.setItem('form.disfraz', this.formularioHalloween.value.disfraz)
    this.localSto.setItem('form.checkBox', this.formularioHalloween.value.checkBox)
    this.localSto.setItem('form.fechallegada', this.formularioHalloween.value.fechaLlegada)
    
  }

}



/*--------------------*/
interface Disfraz {
  disfraz:string;
  verDisfraz:string;
}