import { Component } from '@angular/core';
import { Contact } from '@ionic-native/contacts';
import { IonicPage, Platform, ItemSliding } from 'ionic-angular';
import { ContactosProvider } from '../../providers/providers.export';
import { ContactoUsuario } from '../../Models/ContactoUsuario';

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {
  ContactosDirectorio: ContactoUsuario[] = [];
  Evento: any;
  CantidadContactos: number;
  esSeleccionarTodos: boolean;

  constructor(private _contactoProvider: ContactosProvider,
    private _platForm: Platform) {
    this.esSeleccionarTodos = false;
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
        let cont = 0;
        ordenado.forEach(element => {
          let itemContacto: ContactoUsuario =
          {
            id: cont++,
            esSeleccionado: false,
            Contacto: element
          };

          this.ContactosDirectorio.push(itemContacto);
        });


        this.CantidadContactos = this.ContactosDirectorio.length;

        console.log("Promesa encontrada");
        console.log(JSON.stringify(this.ContactosDirectorio[this.ContactosDirectorio.length - 1]))
        this.cancelarEventoRefrescar();
      },
      (error) => {
        console.log("Hay un error en la pagina del home, promesa obtener contactos");
        console.log(JSON.stringify(error));
        this.cancelarEventoRefrescar();
      }
    );
  }

  SeleccionarTodos(opcion) {
    this.esSeleccionarTodos = opcion;

    this.ContactosDirectorio.forEach(element => {
       element.esSeleccionado = opcion;
    });
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
      this.ContactosDirectorio = [];
    }
  }

  private cancelarEventoRefrescar() {
    if (this.Evento) {
      this.Evento.complete();
    }
  }
  EliminarContacto(contacto) {
    console.log(JSON.stringify(contacto));
  }
  ProcesarContacto(contacto) {
    console.log(JSON.stringify(contacto));
  }
  MarcarContacto(contacto:ContactoUsuario,slidingItem: ItemSliding) {
    debugger;
    console.log(JSON.stringify(contacto));
    contacto.esSeleccionado = true;
    slidingItem.close();
  }
}
