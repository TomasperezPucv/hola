import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/models/usuario';

@Component({
  selector: 'app-profiles',
  templateUrl: './profiles.page.html',
  styleUrls: ['./profiles.page.scss'],
  standalone:false,
})
export class ProfilesPage implements OnInit {
  usuarios: Usuario[] = [];
  soloCasados: boolean = false;
  constructor() { }

  ngOnInit() {
    this.usuarios= [ 
      { id: 12345678, nombre: "Juan", casado: true, edad: 25, rango: "admin" },
      { id: 87654321, nombre: "Maria", casado: false, edad: 30, rango: "usuario" },
      { id: 11223344, nombre: "Pedro", casado: true, edad: 28, rango: "admin" },
      { id: 44332211, nombre: "Ana", casado: false, edad: 22, rango: "usuario" },
      { id: 55667788, nombre: "Luis", casado: true, edad: 35, rango: "admin" },
      { id: 88776655, nombre: "Laura", casado: false, edad: 29, rango: "usuario" },
      { id: 99887766, nombre: "Carlos", casado: true, edad: 32, rango: "admin" },
      { id: 66778899, nombre: "Sofia", casado: false, edad: 27, rango: "usuario" },
      { id: 33445566, nombre: "Javier", casado: true, edad: 31, rango: "admin" },
      { id: 55664433, nombre: "Valeria", casado: false, edad: 24, rango: "usuario" }
    ];


  }

  filtrarCasados() {
    this.soloCasados = !this.soloCasados;
    console.log(this.soloCasados);
  }

}
