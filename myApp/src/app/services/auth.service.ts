import { AuthConstants } from './../config/auth-constants';
import { StorageService } from './storage.service';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  environment = environment;

  //en esta variable almacenamos los datos del user 
  userData$ = new BehaviorSubject<any>('');


  constructor(
    private httpClient: HttpClient,
    private storageService: StorageService,
    private router: Router
    ) { }

    getUserData(){
      this.storageService.get(AuthConstants.AUTH).then(res =>{
        
        //con el metodo next actualizamos los datos de userData$
        this.userData$.next(res);
      })
    }

    login(postDate: any): Observable<any>{
      
       let result = this.httpClient.post(this.environment.api + '/Seguridad/LoginApp', postDate);

      console.log(result);
      return result;
    }

    getPedido(postDate: any): Observable<any>{
      let path = 'http://portafolioduoc.ddns.net/PotafolioServicio/api/Negocio/GetListSeletProveeSolicitudApp'
      let result = this.httpClient.post(path, postDate);
      //console.log(result);
      return result;
   }

   finalizarSolicitud(postData: any){
      return this.httpClient.post(this.environment.api + '/Negocio/UpdateEstadoDetalleSeletProveeSolicitud', postData);;
   }

    
    logout(){
      this.storageService.removeItem(AuthConstants.AUTH).then(res=>{
        this.userData$.next('');
        this.router.navigate(['']);
      })
    }
}
