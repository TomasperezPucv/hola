import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/models/usuario';
import { UsersService } from 'src/app/services/users.service';
@Component({
  selector: 'app-loader',
  templateUrl: './loader.page.html',
  styleUrls: ['./loader.page.scss'],
  standalone:false,
})
export class LoaderPage implements OnInit {
  rut:number = 0;
  nombre:string = "";
  edad:number = 0;
  casado:string = "";
  usuario: Usuario = {id:0, nombre:"", casado:false, edad:0, rango:""};
  listo:boolean = false;


  constructor(private usuarios:UsersService) { }

  ngOnInit() {
  }



  guardar() {
    console.log('Datos ingresados:');
    console.log('RUT:', this.rut);
    console.log('Nombre:', this.nombre);
    console.log('Edad:', this.edad);
    console.log('Estado civil:', this.casado);
    this.usuario.edad = this.edad;
    this.usuario.nombre = this.nombre;
    this.usuario.id = this.rut;
    if(this.casado == "casado") this.usuario.casado = true;
    else this.usuario.casado = false;
    this.usuario.rango = "usuario";
    this.listo= true;
    this.usuarios.addUsuario(this.usuario);
  }


}
