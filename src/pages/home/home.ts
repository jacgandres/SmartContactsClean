import { Component } from '@angular/core';
import {  Contact } from '@ionic-native/contacts';
import { IonicPage, Platform } from 'ionic-angular';
import { ContactosProvider } from '../../providers/providers.export';

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {
  Contactos: Contact[] = [];
  Evento: any;
  CantidadContactos: number;


  constructor(private _contactoProvider: ContactosProvider,
    private _platForm: Platform) {
    console.log('iniciar_carga_contactos HomePage');

    if (this._platForm.is('cordova')) {
      this.iniciar_carga_contactos();
    }
    else {
      console.log("no es un disositivo movil")
      this.CantidadContactos = 1;
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
        console.log(JSON.stringify(this.Contactos[this.Contactos.length - 1]))
        this.cancelarEventoRefrescar();
      },
      (error) => {
        console.log("Hay un error en la pagina del home, promesa obtener contactos");
        console.log(JSON.stringify(error));
        this.cancelarEventoRefrescar();
      }
    );
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

  RefrescarPagina(refrescarEvento) {
    this.Evento = refrescarEvento;
    if (this._platForm.is('cordova')) {
      this.iniciar_carga_contactos();
    }
    else {
      console.log("no es un disositivo movil")
      this.CantidadContactos = 1;
      this.Contactos = [];
    }
  }

  cancelarEventoRefrescar() {
    if (this.Evento) { 
      this.Evento.complete();
    }
  }
  EliminarContacto(contacto, item) {

  }
  CombinarContacto(contacto, item) {

  }
  MarcarContacto(contacto, item) { }
}
