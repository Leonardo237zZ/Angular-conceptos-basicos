//creacion de un componente manualmente

import { Component } from "@angular/core";

@Component({
    selector: 'app-contador',
    template:`  
    
         <h1> {{ titulo }}</h1>

        <h2> el valor de la base es: <strong>{{ base }}</strong></h2 >

        <button (click)= "acumulador(base)" > {{ base }}</button>

        <span> {{ numero }}</span>

        <button (click) = "acumulador(-base)" > {{ -base }}</button>
    
    `       
})


export class ContadorComponent {

    titulo: string = 'Contador APP con Angular';
    numero: number = 10
    base: number = 5

    acumulador = (valor: number) => {

        this.numero += valor
    }

}