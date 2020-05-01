import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,ViewController,AlertController} from 'ionic-angular';
import { UsuarioProvider } from "../../providers/usuario/usuario";

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  correo:string = "";
  contrasena:string= "";

  constructor(public navCtrl: NavController, public navParams: NavParams,
              private viewCtrl:ViewController,
              private _us:UsuarioProvider,
              ) {

            //el view controller me ayuda para cerrar el modal por si quiero salir del login y no tengo usuario y contraseña para logearme    
  }
  
  ingresar(){
    this._us.ingresar(this.correo , this.contrasena)
    if (this._us.activo()) {
      this.viewCtrl.dismiss(true);
      
    }
    
  }

 
}
