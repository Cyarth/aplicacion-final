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

  userData$ = new BehaviorSubject<any>('');

  constructor(
    private HttpClient: HttpClient,
    private storageService: StorageService,
    private router: Router
    ) { }

    getUserData(){
      this.storageService.get(AuthConstants.AUTH).then(res =>{
        this.userData$.next(res);
      })
    }

    login(postDate: any): Observable<any>{
      
       let result = this.HttpClient.post(this.environment.api + '/Seguridad/LoginApp', postDate);

      console.log(result);
      return result;
    }

    getSolicitud(){

      

    }
    logout(){
      this.storageService.removeItem(AuthConstants.AUTH).then(res=>{
        this.userData$.next('');
        this.router.navigate(['']);
      })
    }
}
