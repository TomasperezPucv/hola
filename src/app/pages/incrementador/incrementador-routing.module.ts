import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IncrementadorPage } from './incrementador.page';

const routes: Routes = [
  {
    path: '',
    component: IncrementadorPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IncrementadorPageRoutingModule {}
