import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';


///Pipes 
import { FotoPipe } from '../pipes/foto/foto';
import { UrlSeguroPipe } from '../pipes/url-seguro/url-seguro';

///plugins
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Contacts, Contact } from '@ionic-native/contacts'
import { Device } from '@ionic-native/device';


///firebase

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule, AngularFireDatabase } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { FirebaseProvider } from '../providers/firebase/firebase';



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
    HomePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ///Pipes
    FotoPipe,
    UrlSeguroPipe
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}.provide,
    ///plugings
    Contact, Contacts,
    Device
  ]
})
export class AppModule {}
