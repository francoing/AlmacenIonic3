import { Component } from '@angular/core';
import { NavController , NavParams  } from 'ionic-angular';
import { ProductosProvider } from "../../providers/productos/productos";
import { ProductoPage } from "../producto/producto";
import { CarritoProvider } from "../../providers/carrito/carrito";
import { UsuarioProvider } from "../../providers/usuario/usuario";
import { PorCategoriasPage } from "../../app/index.pages";


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  productoPage=ProductoPage;
  porCategorias= PorCategoriasPage;

  constructor(public navCtrl: NavController,
    private _ps:ProductosProvider,
    private _cs:CarritoProvider,
    private _us:UsuarioProvider,
    public navParams: NavParams) {

  }

  siguiente_pagina(event){
  
    this._ps.cargar_todos().then(()=>{

      
        event.complete();
      })

    
            
    
  }

}
