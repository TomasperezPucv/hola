import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-incrementador',
  templateUrl: './incrementador.page.html',
  styleUrls: ['./incrementador.page.scss'],
  standalone:false
})
export class IncrementadorPage implements OnInit {

  contadorValor: number = 10;
  constructor() { }

  ngOnInit() {
  }

  actualizarValor(nuevoValor: number) {
    this.contadorValor = nuevoValor;
    console.log('Valor actualizado:', nuevoValor);
  }

}
