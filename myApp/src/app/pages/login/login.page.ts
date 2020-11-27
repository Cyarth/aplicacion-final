import { ToastService } from './../../services/toast.service';
import { AuthConstants } from './../../config/auth-constants';
import { StorageService } from './../../services/storage.service';
import { AuthService } from './../../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  public posData = {
    username:'',
    password:''
  }
  
  constructor(private router:Router, private authService:AuthService, private storageService:StorageService, private toastService:ToastService) { }
  
  ngOnInit() {
  }
      validateInputs(){
        let usuario = this.posData.username.trim();
        let password = this.posData.password.trim();
    
        return (this.posData.username && this.posData.password && usuario.length>0 && password.length>0)
      }

  loginAction(){
    if(this.validateInputs()){

      let body = { nombreusuario : this.posData.username, password: this.posData.password};
      
      this.authService.login(body).subscribe((res: any) => {
        let nombreUser= res.nombreusuario;
        console.log(nombreUser);
        console.log(res);
        
        if(res.Message=='OK'){
          this.storageService.store(AuthConstants.AUTH, res);
          this.router.navigate(['home/micuenta']);
        }else{
          this.toastService.presentToast('Usuario o contraseña incorrecta.')
        }
      },
      (error: any)=> {
        this.toastService.presentToast("Error en la conexion.");
      }
      )
    }else{
      this.toastService.presentToast('porfavor ingresa más informacion')
    }
  }
}
