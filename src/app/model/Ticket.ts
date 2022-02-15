import { Boleto } from "./Boleto";
export interface Ticket {
    id: Number,
    nombreCliente: string,
    telefono: Number,
    numeroTicket: Number,
    fechaTicket: string,
    nombreComercio: string,
    foto: any,
    boleto: Boleto
}