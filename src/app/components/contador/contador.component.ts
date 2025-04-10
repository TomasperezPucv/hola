import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-contador',
  templateUrl: './contador.component.html',
  styleUrls: ['./contador.component.scss'],
  standalone: false
})
export class ContadorComponent  implements OnInit {

  @Input() valor: number = 0;

  @Output() valorCambiado = new EventEmitter<number>();

  constructor() { }

  ngOnInit() {}

  incrementar() {
    this.valor++;
    this.valorCambiado.emit(this.valor);
  }
  decrementar() {
    this.valor--;
    this.valorCambiado.emit(this.valor);
  }


}
