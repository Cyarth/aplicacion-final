import { Pedido } from './../../interfaces/pedido';
import { PedidoService } from './../../services/pedido.service';
import { ToastService } from './../../services/toast.service';
import { StorageService } from './../../services/storage.service';
import { Router } from '@angular/router';
import { AuthService } from './../../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { AuthConstants } from './../../config/auth-constants';

@Component({
  selector: 'app-micuenta',
  templateUrl: './micuenta.page.html',
  styleUrls: ['./micuenta.page.scss'],
})
export class MicuentaPage implements OnInit {
  environment = environment;
  displayUserData : any;
  displayPedido: any;
  userData$ = new BehaviorSubject<any>('');

  public posData = {
    idusuarioperteneceempresa:0
  }

  Pedidos:any[];

  constructor(private authService:AuthService, private router:Router, HttpClient:HttpClient, private storageService: StorageService, private toastService:ToastService) { }

  ngOnInit() {
    this.authService.userData$.subscribe((res:any) => {
      
      this.displayUserData = res;
    })
  }


  validateInputs(){
    let id = this.posData.idusuarioperteneceempresa;
    return id;
  }

  getPedido(){
    
    let body = {IdTransporte : this.displayUserData.idusuarioperteneceempresa}
    this.authService.getPedido(body).subscribe((res:any)=>{
      if(res.Message=='OK'){
        this.Pedidos=res.detalleSelProvSolDTOs;
        console.log(res);
      }else{
        return this.toastService.presentToast('no hay pedidos.')
      }
    });
  }

  finalizarPedido(Pedido){

    this.authService.finalizarSolicitud(Pedido).subscribe((res:any)=>{
      if(res.Message=='OK'){
        this.toastService.presentToast('Pedido finalizado');
        this.getPedido();
      }
    })
  }
  



  logoutAction(){
    this.authService.logout();
    this.router.navigate(['login']);
  
  }

}
