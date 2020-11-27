import { IndexGuard } from './../guards/index.guard';
import { IndexPage } from './index.page';
import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes:Routes=[
    {
        path:'',
        component: IndexPage,
        canActivate: [IndexGuard],
        children: [
            {path:'login', loadChildren:()=> import('../pages/login/login.module').then(m=> m.LoginPageModule)},
            {path:'aboutus', loadChildren:()=> import('../pages/aboutus/aboutus.module').then(m=> m.AboutusPageModule)},
            
        ]
    }];

    @NgModule({
        imports:[RouterModule.forChild(routes)],
        exports: [RouterModule]
    })
    
    export class IndexRouter {}