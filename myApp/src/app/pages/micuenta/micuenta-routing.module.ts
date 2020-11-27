import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MicuentaPage } from './micuenta.page';

const routes: Routes = [
  {
    path: '',
    component: MicuentaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MicuentaPageRoutingModule {}
