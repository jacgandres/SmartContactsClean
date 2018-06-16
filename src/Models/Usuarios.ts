import { Contact } from '@ionic-native/contacts';

export interface Usuario {
    date: Date;
    id: string;
    urlFoto: string;
    Contactos: Contact[];
    ContactosProcesados: Contact[];
} 