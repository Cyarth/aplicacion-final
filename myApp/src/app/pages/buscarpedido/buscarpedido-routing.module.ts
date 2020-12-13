import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BuscarpedidoPage } from './buscarpedido.page';

const routes: Routes = [
  {
    path: '',
    component: BuscarpedidoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BuscarpedidoPageRoutingModule {}
