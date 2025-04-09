import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProfilesPageRoutingModule } from './profiles-routing.module';

import { ProfilesPage } from './profiles.page';

import { SharedModule } from 'src/app/components/shared/shared.module';

@NgModule({
  imports: [
    SharedModule,
    CommonModule,
    FormsModule,
    IonicModule,
    ProfilesPageRoutingModule,
  ],
  declarations: [ProfilesPage]
  
})
export class ProfilesPageModule {}
