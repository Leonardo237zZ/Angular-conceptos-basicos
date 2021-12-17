import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  titulo: string = 'Contador APP con Angular';
  numero: number = 10
  base: number = 5
  altura: number = 25

  acumulador = (valor:number) =>{

    this.numero += valor
  }

  
}

