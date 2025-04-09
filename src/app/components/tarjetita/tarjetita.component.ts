import { Component, input, Input, OnInit } from '@angular/core';
import { Usuario } from 'src/app/models/usuario';
@Component({
  selector: 'app-tarjetita',
  templateUrl: './tarjetita.component.html',
  styleUrls: ['./tarjetita.component.scss'],
  standalone: false,
})
export class TarjetitaComponent  implements OnInit {

  @Input() usuario!: Usuario;
  constructor() {
    
   }

  ngOnInit() {
    
  }
  

  
}
