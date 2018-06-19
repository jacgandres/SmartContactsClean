import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';


///plugins
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Contacts, Contact } from '@ionic-native/contacts'
import { Device } from '@ionic-native/device';


///firebase  

///Pipes
import { UrlSeguroPipe } from "../pipes/url-seguro/url-seguro";

///Providers
import { FirebaseProvider, ContactosProvider, LoadingComunProvider } from "../providers/providers.export"; 


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
    HomePage,
    UrlSeguroPipe
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler }.provide,
    ///plugings
    Contact, Contacts, Device,
    ///providers
    FirebaseProvider, ContactosProvider,
    LoadingComunProvider
    ///FireBase 
  ]
})
export class AppModule { }
