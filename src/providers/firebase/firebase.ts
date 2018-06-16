

import { Usuario } from '../../Models/Usuarios';
//import { AngularFireDatabase } from '../../../node_modules/angularfire2/database'

import { Contact } from '@ionic-native/contacts';
import { AngularFireDatabase  } from 'angularfire2/database';

import { Injectable } from '@angular/core';


@Injectable()
export class FirebaseProvider {

  constructor(private _DataBase: AngularFireDatabase) {
    console.log('Hello Firebase Provider Provider');
  }

  public InsertarContactos(contactos: Contact[]): Promise<any> {
    try {
      console.log('Insertar Contactos Provider');
      let usuario: Usuario =
        {
          Contactos: contactos,
          date: new Date(),
          id: this._DataBase.createPushId(),
          ContactosProcesados: [],
          urlFoto: ""
        };

      console.log(JSON.stringify(this._DataBase));
      return this._DataBase.object(`/Usuarios/${usuario.id}`).update(usuario);
    } catch (error) {
      console.log("Error insertando en firebase 4");
      console.log(JSON.stringify(error));
      console.log(JSON.stringify(this._DataBase));
      return null;
    }

  }

}
