import { HomeGuard } from './../guards/home.guard';
import { HomePage } from './../home/home.page';
import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes:Routes=[
    {
        path:'home',
        component: HomePage,
        canActivate: [HomeGuard],
        children: [
            {path:'micuenta',loadChildren:()=> import('../pages/micuenta/micuenta.module').then(m=> m.MicuentaPageModule)},
            {path:'pedido', loadChildren:()=> import('../pages/pedido/pedido.module').then(m=> m.PedidoPageModule)},
            {path:'aboutus', loadChildren:()=> import('../pages/aboutus/aboutus.module').then(m=> m.AboutusPageModule)},
            
        ]
    }];

    @NgModule({
        imports:[RouterModule.forChild(routes)],
        exports: [RouterModule]
    })
    
    export class HomeRouter {}