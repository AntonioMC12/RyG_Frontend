import { Boleto } from './Boleto';

export interface Usuario {
  id: number;
  admin: boolean;
  direccion: string;
  email: string;
  latitud: number;
  longitud: number;
  nombre_comercio: string;
  participaciones: number;
  telefono: string;
  uid: string;
  boletos?: Boleto[];
}
