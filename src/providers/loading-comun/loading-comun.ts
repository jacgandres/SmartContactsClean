 
import { Injectable } from '@angular/core';
import { AlertController, LoadingController, Loading } from 'ionic-angular';
 
@Injectable()
export class LoadingComunProvider {

  public LoadingView:Loading;

  
  constructor(private alertCtrl: AlertController,
              private loadingCtrl: LoadingController ) {
    console.log('Hello LoadingComunProvider Provider');
  }

  public MostrarMensaje(titulo: string, mensaje: string, inputs: any[], botones: any[]) {
    let alert = this.alertCtrl.create({
        title: titulo,
        message: mensaje,
        inputs: inputs,
        buttons: botones
    });
    alert.present();
  } 
    
  public presentarLoadingDefault() {
    this.LoadingView = this.loadingCtrl.create({
      spinner: 'hide',
      content: `<div class="custom-spinner-container" color='blueMenu'>
                  <img src="./assets/imgs/lazyload.gif"></img>
                </div>`
    }); 

    this.LoadingView.present();
  }

}
