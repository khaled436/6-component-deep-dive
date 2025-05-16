import {Component, DestroyRef, effect, inject, OnDestroy, OnInit, signal} from '@angular/core';

@Component({
  selector: 'app-status',
  standalone: true,
  imports: [],
  templateUrl: './status.component.html',
  styleUrl: './status.component.css'
})
export class StatusComponent implements OnInit {
  currentStatus = signal<'online'|'offline'|'unknown' >('online');
  destroyRef = inject(DestroyRef);
  constructor() {
    effect(()=>{
      console.log(this.currentStatus());
    });
  }
  ngOnInit() {
    const interval = setInterval(() => {
      const rnd = Math.random();
      if (rnd < 0.5) {
        this.currentStatus.set('online');
      } else if (rnd < 0.9) {
        this.currentStatus.set('offline');
      } else {
        this.currentStatus.set('unknown');
      }
    },5000)
    this.destroyRef.onDestroy(() =>{
      clearInterval(interval);
    })
  }
}
