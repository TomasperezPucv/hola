import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  standalone:false,
})
export class HeaderComponent  implements OnInit {
  showThemeOptions = false;

  constructor(private router:Router) { }

  ngOnInit() {
    console.log("se creo el encabezado")
  }

  goToHome() {
    this.router.navigate(['/home']);
  }

  goToProfile() {
    this.router.navigate(['/profiles']);
  }

  goToLoader(){
    this.router.navigate(['/loader']);
  }

  goToContador(){
    this.router.navigate(['/incrementador']);
  }

  toggleThemeOptions() {
    this.showThemeOptions = !this.showThemeOptions;
  }

  setLightTheme() {
    document.body.setAttribute('color-theme', 'light');
    this.showThemeOptions = false;
  }

  setDarkTheme() {
    document.body.setAttribute('color-theme', 'dark');
    this.showThemeOptions = false;
  }

  

}
