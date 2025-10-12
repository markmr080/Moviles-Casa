export class Personaje {
    nombre:string;
    raza:string;
    poder:number;
    imagen:string;

    constructor(nombre:string, raza:string, poder:number, imagen:string) {
        this.imagen=imagen;
        this.nombre=nombre;
        this.poder=poder;
        this.raza=raza;
    }

}