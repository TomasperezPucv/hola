import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProfilesPageRoutingModule } from './profiles-routing.module';

import { ProfilesPage } from './profiles.page';
import { TarjetitaComponent } from 'src/app/components/tarjetita/tarjetita.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProfilesPageRoutingModule,
    
    
  ],
  declarations: [ProfilesPage, TarjetitaComponent]
})
export class ProfilesPageModule {}
