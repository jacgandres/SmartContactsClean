import { Contact } from '@ionic-native/contacts';

export interface Usuario {
    UltimaFechaIngreso?: Date;
    id: string;
    urlFoto: string;
    Contactos: Contact[];
    ContactosProcesados: Contact[];
    ProvedorAcceso?:string;
    Correo?:string;
    Clave?:string;
} 