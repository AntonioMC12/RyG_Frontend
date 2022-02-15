import { Ticket } from "./Ticket";
export interface TicketWrapper {
    ticket : Ticket,
    multipartFile : File
}