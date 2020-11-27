import { AuthService } from './../services/auth.service';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn:'root'
})

export class UserDataResolver{
    constructor(private authService:AuthService){}

        resolve(){
            console.log('calls a home route');
            return this.authService.getUserData();
        }
    
}