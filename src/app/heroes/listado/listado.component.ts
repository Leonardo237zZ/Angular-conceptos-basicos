import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html'
})
export class ListadoComponent {

  heroes: string[] = ['Spiderman', 'Hulk', 'Thor', 'Blackpanter','Falcon' , 'Vision']
  numeros = [911,800,650,745]
  paises: string[] = ['brasil', 'mexico', 'argentina', 'portugal' , 'alemania', 'francia']
  
  heroeEliminado: string = ''
  
  eliminarHeroe(){

    console.log('eliminandoo.....')
    this.heroeEliminado = this.heroes.shift() || ''
     
  }
}

//el ngOnInit se utiliza para inicializar 