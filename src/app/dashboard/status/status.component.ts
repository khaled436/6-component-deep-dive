import {Component, OnDestroy, OnInit} from '@angular/core';
import {interval} from "rxjs";

@Component({
  selector: 'app-status',
  standalone: true,
  imports: [],
  templateUrl: './status.component.html',
  styleUrl: './status.component.css'
})
export class StatusComponent implements OnInit,OnDestroy {
  currentStatus : 'online'|'offline'|'unknown' = 'online';
  private interval?: ReturnType<typeof setInterval>;
  ngOnInit() {
    this.interval = setInterval(() => {
      const rnd = Math.random();
      if (rnd < 0.5) {
        this.currentStatus = 'online';
      } else if (rnd < 0.9) {
        this.currentStatus = 'offline';
      } else {
        this.currentStatus = 'unknown';
      }
    },5000)

  }

  ngOnDestroy(): void {
    clearTimeout(this.interval);
  }
}
