import { Component } from "@angular/core";


@Component({
    selector: 'app-heroe',
    templateUrl: 'heroe.component.html'                     //se ocupa templateUrl  por que es un template que esta en otro archivo
})
export class HeroeComponent {

    nombre: string = 'ironman'
    edad: number = 35

    get nombreCapitaliazdo(): string{
        return this.nombre.toUpperCase()
    }

    obtenerNombre(): string{
        return `${this.nombre} ${this.edad}`
    }

    cambiarNombre(): void{
        this.nombre = 'capitan america'
    }

    cambiarEdad(): void{
        this.edad = 29
    }
}