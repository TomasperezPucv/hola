import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  standalone:false, //acuerdate siempre al crear una ppagina o componente poner esto :)
})
export class HomePage implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }

  DirigiraLoader(){
    this.router.navigate(['/loader'])
  }

  

}
