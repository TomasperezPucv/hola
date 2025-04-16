import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/models/usuario';
import { UsersService } from 'src/app/services/users.service';
@Component({
  selector: 'app-profiles',
  templateUrl: './profiles.page.html',
  styleUrls: ['./profiles.page.scss'],
  standalone:false,
})
export class ProfilesPage implements OnInit {
  usuarios: Usuario[] = [];
  soloCasados: boolean = false;
  constructor(private users:UsersService) { }

  ngOnInit() {
    this.usuarios = this.users.llenarUsuarios();
    console.log(this.usuarios);
  }

  filtrarCasados() {
    this.soloCasados = !this.soloCasados;
    console.log(this.soloCasados);
  }

}
