import { Component } from '@angular/core';
import {NewTicketComponent} from "./new-ticket/new-ticket.component";
import {Ticket} from "./ticket.model";

@Component({
  selector: 'app-tickets',
  standalone: true,
  imports: [
    NewTicketComponent
  ],
  templateUrl: './tickets.component.html',
  styleUrl: './tickets.component.css'
})
export class TicketsComponent {

  tickets: Ticket[] = []

  onAdd(ticketdata: { title: string; text: string; }) {
    const ticket: Ticket = {
      title: ticketdata.title,
      request: ticketdata.text,
      id: Math.random().toString(),
      status: "open"
    }

    this.tickets.push(ticket);
  }
}
