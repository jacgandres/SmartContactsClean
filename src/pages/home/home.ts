import { Component } from '@angular/core';
import { Contact } from '@ionic-native/contacts';
import { IonicPage, Platform } from 'ionic-angular';
import { ContactosProvider } from '../../providers/providers.export';
import { FirebaseProvider } from '../../providers/firebase/firebase';

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {
  Contactos: Contact[] = [];

  CantidadContactos: number;


  constructor(private _contactoProvider: ContactosProvider,
              private _platForm: Platform,
              private _firebaseProviedr: FirebaseProvider) {
    console.log('iniciar_carga_contactos HomePage');
    if (this._platForm.is('cordova')) {
      this.iniciar_carga_contactos();
    }
    else {
      console.log("no es un disositivo movil")
    }
  }

  iniciar_carga_contactos() {

    this._contactoProvider.consultarContactos().then(
      (result) => {

        let ordenado: Contact[] = result.sort((obj1, obj2) => {
          return this.organizarLista(obj1, obj2);
        });

        this.Contactos = ordenado;

        this.Contactos = result;
        this.CantidadContactos = this.Contactos.length;

        console.log("Promesa encontrada");
        this.Crear_Post();

      },
      (error) => {
        console.log("Hay un error en la pagina del home, promesa obtener contactos");
        console.log(JSON.stringify(error));
      }
    );


  }


  private Crear_Post() {

    this._firebaseProviedr.InsertarContactos(this.Contactos).then((result1) => {
      console.log(JSON.stringify(result1));
      console.log("Inserto Correctamente");
    }, (error1) => {
      console.log("Hay un error en la pagina del home, promesa obtener contactos");
      console.log(JSON.stringify(error1));
    });/* */
  }

  organizarLista(obj1, obj2) {
    if (obj1.displayName > obj2.displayName) {
      return 1;
    }
    if (obj1.displayName < obj2.displayName) {
      return -1;
    }
    return 0;
  }

}
