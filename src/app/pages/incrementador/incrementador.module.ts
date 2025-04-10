import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IncrementadorPageRoutingModule } from './incrementador-routing.module';

import { IncrementadorPage } from './incrementador.page';
import { ContadorComponent } from 'src/app/components/contador/contador.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IncrementadorPageRoutingModule
  ],
  declarations: [IncrementadorPage, ContadorComponent]
})
export class IncrementadorPageModule {}
