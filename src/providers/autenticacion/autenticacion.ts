
import { Injectable } from '@angular/core';

import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import "rxjs/add/operator/map";

import { Facebook } from '@ionic-native/facebook';
import { Platform } from 'ionic-angular';
import { Usuario } from '../../Models/Usuarios';


@Injectable()
export class AutenticacionProvider {

  UsuarioSistema: Usuario = {}

  constructor(private _aFAuth: AngularFireAuth,
    private _fb: Facebook,
    private _platform: Platform) {


  }


  LogInUsuarioContrasena() {
    return new Promise((resolve, reject) => {
      this._aFAuth.auth.signInWithEmailAndPassword(
        this.UsuarioSistema.Correo,
        this.UsuarioSistema.Clave
      ).then((data) => {
        console.log(JSON.stringify(data));
        resolve(data);
      },
        (error) => {
          console.log(JSON.stringify(error));
          reject(null);
        })
    });
  }

  signInWithFacebook() {
    return new Promise((resolve, reject) => { 
      debugger;
      console.log("antes de entrar a la primera promesa")
      if (this._platform.is('cordova')) 
      {
        try 
        {
          this._fb.login(['email', 'public_profile'/*,'user_friends'*/])
            .then(res => {
              debugger;
              console.log("entro a la primera promesa..........................................") 
              const facebookCredential = firebase.auth.FacebookAuthProvider.credential(res.authResponse.accessToken);
              firebase.auth().signInWithCredential(facebookCredential)
                .then(user => {
                  debugger;
                  console.log("entro a la segunda promesa................................................")
                  resolve(user);
                }).catch(e => {
                  console.log('Error con el login' + JSON.stringify(e));
                  reject(null);
                });
            }, (error1) => 
            {
              console.exception("Error pidiendo credenciales en facebook....");
              console.exception(JSON.stringify(error1));
              reject(null);
            });

        } catch (error2) {
          console.exception(JSON.stringify(error2));
          reject(null);
        }
      } else {
        // escritorio 
        this._aFAuth.auth
          .signInWithPopup(new firebase.auth.FacebookAuthProvider())
          .then(userFace => {
            debugger;
            console.log("entro a la segunda promesa")
            let user = userFace.user;
            resolve(user);
          });
      } 
    });
  }



}
