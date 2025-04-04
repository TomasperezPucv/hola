import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
  standalone:false,
})
export class FooterComponent  implements OnInit {

  constructor() { }

  ngOnInit() {
    console.log("se creo el footer")
  }

}
