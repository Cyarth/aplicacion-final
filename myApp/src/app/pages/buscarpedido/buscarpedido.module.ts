import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BuscarpedidoPageRoutingModule } from './buscarpedido-routing.module';

import { BuscarpedidoPage } from './buscarpedido.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BuscarpedidoPageRoutingModule
  ],
  declarations: [BuscarpedidoPage]
})
export class BuscarpedidoPageModule {}
