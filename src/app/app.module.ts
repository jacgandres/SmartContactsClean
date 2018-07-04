import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';
import { RegisterPage } from "../pages/register/register";
import { TabMenuPage } from "../pages/tab-menu/tab-menu";

///plugins
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Contacts, Contact } from '@ionic-native/contacts'
import { Device } from '@ionic-native/device';
import { AppVersion } from '@ionic-native/app-version';
 
///firebase  

///Pipes
import { UrlSeguroPipe } from "../pipes/url-seguro/url-seguro";

///Providers 
import { UsuarioProvider } from '../providers/usuario/usuario'; 
import { ContactosProvider } from "../providers/contactos/contactos";
import { LoadingComunProvider } from "../providers/loading-comun/loading-comun";

export const firebaseConfig = {
  apiKey: "AIzaSyBjAv1BPPamEDx-SEP65ZVGoa8uu3dFZLU",
  authDomain: "smartcleancontacts-9ab34.firebaseapp.com",
  databaseURL: "https://smartcleancontacts-9ab34.firebaseio.com",
  projectId: "smartcleancontacts-9ab34",
  storageBucket: "smartcleancontacts-9ab34.appspot.com",
  messagingSenderId: "995317522238"
};


@NgModule({
  declarations: [
    MyApp,
    HomePage,LoginPage,RegisterPage,TabMenuPage,
    UrlSeguroPipe
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage, LoginPage,TabMenuPage, RegisterPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler }.provide,
    ///plugings
    Contact, Contacts, Device,AppVersion,
    ///providers
    ContactosProvider,
    LoadingComunProvider,
    UsuarioProvider
    ///FireBase 
  ]
})
export class AppModule { }
