import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TarjetitaComponent } from '../tarjetita/tarjetita.component';
import { IonicModule } from '@ionic/angular';

@NgModule({
  declarations: [TarjetitaComponent],
  imports: [
    CommonModule,
    IonicModule
  ],
  exports: [TarjetitaComponent],
})
export class SharedModule { }
