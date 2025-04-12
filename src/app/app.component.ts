import { Component } from '@angular/core';
import {HeaderComponent} from "./header/header.component";
import {StatusComponent} from "./dashboard/status/status.component";
import {TraficComponent} from "./dashboard/trafic/trafic.component";
import {TicketsComponent} from "./dashboard/tickets/tickets.component";
import {DashboardItemComponent} from "./dashboard/dashboard-item/dashboard-item.component";

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  imports: [
    HeaderComponent,
    StatusComponent,
    TraficComponent,
    TicketsComponent,
    DashboardItemComponent
  ]
})
export class AppComponent {
}
