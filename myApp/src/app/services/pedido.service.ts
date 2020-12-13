import { environment } from './../../environments/environment';
import { Pedido } from './../interfaces/pedido';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class PedidoService {

  environment=environment;

  constructor(
    private http : HttpClient
    ) { }

    getPedido(){
      const path = environment + '/Negocio/GetListSeletProveeSolicitudApp' ;
      let res = this.http.get<Pedido[]>(path);
      console.log(res)
      return res;
    }
}
