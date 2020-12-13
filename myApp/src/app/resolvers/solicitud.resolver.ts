import { resolve } from 'url';
import { AuthService } from './../services/auth.service';
import { Injectable } from '@angular/core';


@Injectable({
    providedIn:'root'
})

export class SolicitudResolver{
    constructor(private authService:AuthService){}

        resolve(){
            return this.authService.getUserData();
        }
    
}