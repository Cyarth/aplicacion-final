import { AuthService } from './../../services/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-micuenta',
  templateUrl: './micuenta.page.html',
  styleUrls: ['./micuenta.page.scss'],
})
export class MicuentaPage implements OnInit {

  displayUserData : any;

  constructor(private AuthService:AuthService) { }

  ngOnInit() {
    this.AuthService.userData$.subscribe((res:any) => {
      
      this.displayUserData = res;
    })
  }

  logoutAction(){
    this.AuthService.logout();
  }

}
