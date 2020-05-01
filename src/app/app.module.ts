import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ProductosProvider } from '../providers/productos/productos';
import { UsuarioProvider } from '../providers/usuario/usuario';
import { CarritoProvider } from '../providers/carrito/carrito';
import { HttpClientModule } from '@angular/common/http';
//pipes
import { PipesModule } from "../pipes/pipes.module";
//paginas
import {CarritoPage,CategoriasPage,OrdenesDetallePage,OrdenesPage,PorCategoriasPage,TabsPage,LoginPage} from "../../src/app/index.pages";
import { ProductoPage } from "../pages/producto/producto";
//almacenamiento
import { IonicStorageModule } from '@ionic/storage';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ProductoPage,
    CarritoPage,
    CategoriasPage,
    OrdenesDetallePage,
    OrdenesPage,
    PorCategoriasPage,
    TabsPage,
    LoginPage,
    
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    PipesModule,
    IonicStorageModule.forRoot(),
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ProductoPage,
    CarritoPage,
    CategoriasPage,
    OrdenesDetallePage,
    OrdenesPage,
    PorCategoriasPage,
    TabsPage,
    LoginPage,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ProductosProvider,
    UsuarioProvider,
    CarritoProvider
  ]
})
export class AppModule {}
