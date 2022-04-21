import { Boleto } from './Boleto';

export interface Premio {
  id: Number;
  description: string;
  entregado: boolean;
  boleto?: Boleto;
}
