import { Component } from '@angular/core';
import {HeaderComponent} from "./header/header.component";
import {StatusComponent} from "./status/status.component";
import {TraficComponent} from "./trafic/trafic.component";
import {TicketsComponent} from "./tickets/tickets.component";

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  imports: [
    HeaderComponent,
    StatusComponent,
    TraficComponent,
    TicketsComponent
  ]
})
export class AppComponent {
}
