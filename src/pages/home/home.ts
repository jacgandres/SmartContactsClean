import {Component }from '@angular/core'; 
import {Contact }from '@ionic-native/contacts'; 
import {IonicPage, Platform, ItemSliding }from 'ionic-angular'; 
import {ContactosProvider, LoadingComunProvider} from '../../providers/providers.export'; 
import {ContactoUsuario} from '../../Models/ContactoUsuario';  

@IonicPage()
@Component( {
  selector:'page-home', 
  templateUrl:'home.html', 
})
export class HomePage {
  ContactosDirectorio:ContactoUsuario[] = [];  
  GrupoContactos:ContactosAgrupados[]=[];
  Evento:any; 
  CantidadContactos:number; 
  esSeleccionarTodos:boolean; 

  constructor(private _contactoProvider:ContactosProvider, 
              private _loadingCmn: LoadingComunProvider, 
              private _platForm:Platform) {

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
    this._loadingCmn.presentarLoadingDefault();

    this._contactoProvider.consultarContactos().then(
      (result) =>  { 
        this.ContactosDirectorio=[];
        let ordenado:Contact[] = result.sort((obj1, obj2) =>  {
          return this.organizarLista(obj1, obj2); 
        }); 
        let cont = 0; 
        let gruposLetras:string[]=[];
        ordenado.forEach(element =>  { 
          let itemContacto:ContactoUsuario =  {
              id:cont++, 
              esSeleccionado:false, 
              Contacto:element, 
              PrimeraLetra:element.displayName.trim().toUpperCase().substring(0, 1)
          };  
          if(gruposLetras.indexOf(itemContacto.PrimeraLetra)==-1)
            gruposLetras.push(itemContacto.PrimeraLetra);

          this.ContactosDirectorio.push(itemContacto); 
        }); 

        gruposLetras.forEach(grupoLetra => {
            let grupoContactos:ContactosAgrupados  = 
            {
              Contactos : this.ContactosDirectorio.filter(contacto => contacto.PrimeraLetra === grupoLetra ),
              PrimeraLetra: grupoLetra
            };

            this.GrupoContactos.push(grupoContactos);
        });
  
        this.CantidadContactos = this.ContactosDirectorio.length; 

        console.log("Promesa encontrada"); 
        this.cancelarEventoRefrescar(); 

        this._loadingCmn.LoadingView.dismiss(); 
      }, 
      (error) =>  {
        console.log("Hay un error en la pagina del home, promesa obtener contactos"); 
        console.log(JSON.stringify(error)); 
        this.cancelarEventoRefrescar(); 
        this._loadingCmn.LoadingView.dismiss(); 
      }); 
  }

  SeleccionarTodos(opcion) {
    this._loadingCmn.presentarLoadingDefault();

    this.esSeleccionarTodos = opcion; 

    this.ContactosDirectorio.forEach(element =>  {
       element.esSeleccionado = opcion; 
    }); 

    this.GrupoContactos.forEach(grupoContacto => {
      grupoContacto.Contactos.forEach(contacto => {
        contacto.esSeleccionado = opcion;
      });
    });

    this._loadingCmn.LoadingView.dismiss(); 
  }


  organizarLista(obj1, obj2) {
    if (obj1.displayName > obj2.displayName) {
      return 1; 
    }
    if (obj1.displayName < obj2.displayName) {
      return-1; 
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

  MarcarContacto(contacto:ContactoUsuario, slidingItem:ItemSliding) {
    console.log(JSON.stringify(contacto)); 
    contacto.esSeleccionado = true; 
    slidingItem.close(); 
  }

  DesmarcarContacto(contacto:ContactoUsuario, slidingItem:ItemSliding) {
    console.log(JSON.stringify(contacto)); 
    contacto.esSeleccionado = false; 
    slidingItem.close(); 
  }

  
  doInfinite(infiniteScroll) {
      /*
      console.log('Begin async operation: ' + this.ContactosDirectorioScroll.length); 
      
      setTimeout(() =>  {
        let subArray:any[] = []; 
        
        if (this.ContactosDirectorioScroll.length + 20 < this.ContactosDirectorio.length) {
          subArray.push(... this.ContactosDirectorio.slice(this.ContactosDirectorioScroll.length, this.ContactosDirectorioScroll.length + 20)); 
        }
        else {
          subArray.push(... this.ContactosDirectorio.slice(this.ContactosDirectorioScroll.length, this.ContactosDirectorio.length)); 
        }

        this.ContactosDirectorioScroll.push(... subArray); 
        console.log('subArray ' + subArray.length); 
        console.log('Async operation has ended ' + this.ContactosDirectorioScroll.length); 
        
        infiniteScroll.complete(); 
      }, 350); 
     */
  }
}

export interface ContactosAgrupados { 
  Contactos: ContactoUsuario[];
  PrimeraLetra:string; 
} 