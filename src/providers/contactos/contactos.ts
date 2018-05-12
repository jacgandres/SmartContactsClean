
import { Contact, Contacts } from '@ionic-native/contacts';
import { Injectable } from '@angular/core';
import { Platform } from 'ionic-angular';


@Injectable()
export class ContactosProvider {

  constructor(private _platForm: Platform, private _contacts: Contacts) {
    console.log('Hello ContactosProvider Provider');
  }
  consultarContactos(): Promise<Contact[]> {
    console.log('Entrando al modulo de los contactos');

    if (this._platForm.is("cordova")) {

      try {

        console.log("Apunto de hacer consulta");
        let option: any = {
          filter: "",
          hasPhoneNumber: true,
          multiple: true
        };

        let fields: any[] = ['displayName'];


        return this._contacts.find(fields, option);

      } catch (error) {
        console.log(JSON.stringify(error));
        throw error;
      }

    }
    else {
      console.log("No se esta ejecutando un dispositivo movil");
      return null;
    }
  }
}
