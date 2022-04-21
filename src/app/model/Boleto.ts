import { Usuario } from './Usuario';
import { Premio } from './Premio';
import { Ticket } from './Ticket';

export interface Boleto {
  id: Number;
  descripcion: string;
  entregado: boolean;
  canjeado: boolean;
  usuario: Usuario;
  premio?: Premio;
  ticket?: Ticket;
}
