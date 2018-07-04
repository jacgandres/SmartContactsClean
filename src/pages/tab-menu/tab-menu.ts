import { Component } from '@angular/core';
import { IonicPage, NavController, Platform, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';
import { AppVersion } from '@ionic-native/app-version';

 
@IonicPage()
@Component({
  selector: 'page-tab-menu',
  templateUrl: 'tab-menu.html'
})
export class TabMenuPage {

  YearFooter:number=0;
  NumeroVersion:string="";
  AppNombre:string="";

  homeRoot =  HomePage 
  tool1Root = 'Tool1Page'
  tool2Root = 'Tool2Page'


  constructor(public navCtrl: NavController,
              private _navParams:NavParams,
              private _versionApp:AppVersion,
              private _platForm:Platform) {
    
    this.YearFooter = (new Date()).getFullYear();
    console.log('iniciar_carga_contactos HomePage'); 
    debugger;
    let usuario= _navParams.get('UsuarioSistema');
    if (this._platForm.is('cordova')) { 
      this._versionApp.getAppName().then((name)=>{
        this.AppNombre=name;
      });

      this._versionApp.getVersionNumber().then((numero)=>{
        this.NumeroVersion=numero;
      })
    } 
  }

}
