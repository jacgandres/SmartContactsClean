

import { Usuario } from '../../Models/Usuarios';  
import { Contact } from '@ionic-native/contacts'; 
import { Injectable } from '@angular/core';


@Injectable()
export class FirebaseProvider {

  constructor( ) {
    console.log('Hello Firebase Provider Provider');
  }

  public InsertarContactos(contactos: Contact[])  {
     
  }

}
