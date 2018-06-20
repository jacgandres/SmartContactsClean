import { Contact } from '@ionic-native/contacts';


export interface ContactoUsuario {
    id: number;
    Contacto: Contact;
    PrimeraLetra:string;
    esSeleccionado: boolean;
} 