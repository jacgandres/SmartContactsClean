import { Component } from '@angular/core';
import {
  AlertController,
  MenuController,
  IonicPage,
  ItemSliding,
  LoadingController,
  NavController,
  NavParams,
  Platform,
  Refresher
} from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {
  Contactos: any = [];

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    private _platForm: Platform,
    private _alertCtrl: AlertController,
    private loadingCtrl: LoadingController,
    private _menuCtrl: MenuController) {

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HomePage');
  }

}
