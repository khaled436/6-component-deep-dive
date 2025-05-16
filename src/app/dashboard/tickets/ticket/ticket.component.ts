import {Component, input, output, signal} from '@angular/core';
import {Ticket} from "../ticket.model";

@Component({
  selector: 'app-ticket',
  standalone: true,
  imports: [],
  templateUrl: './ticket.component.html',
  styleUrl: './ticket.component.css'
})
export class TicketComponent {
  data = input.required<Ticket>();
  areDetailsVisible = signal(false);
  closeTicket = output();

  onToggleDetails(){
    this.areDetailsVisible.update((wasVisible)=> !wasVisible);
  }

  onMarkedAsCompleted(){
    this.closeTicket.emit();
  }
}
