import { AuthService } from './../../services/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-micuenta',
  templateUrl: './micuenta.page.html',
  styleUrls: ['./micuenta.page.scss'],
})
export class MicuentaPage implements OnInit {

  constructor(private AuthService:AuthService) { }

  ngOnInit() {
  }

  logoutAction(){
    this.AuthService.logout();
  }

}
