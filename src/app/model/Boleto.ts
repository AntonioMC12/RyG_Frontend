import { Usuario } from "./Usuario";
import { Premio } from "./Premio";


export interface Boleto {
    id: Number,
    descripcion: string,
    entregado: boolean,
    canjeado: boolean
    usuario: Usuario,
    premio: Premio
}