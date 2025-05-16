import {Component, contentChild, ContentChild, ElementRef, inject, input, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'app-control',
  standalone: true,
  imports: [],
  templateUrl: './control.component.html',
  styleUrl: './control.component.css',
  encapsulation: ViewEncapsulation.None,
  host:{
    class: 'control',
      '(click)': 'onClick()'
  }
})
export class ControlComponent {

  private control =  contentChild<ElementRef<HTMLInputElement | HTMLTextAreaElement>>('input');

  label = input.required<string>();
  private element = inject(ElementRef);
  onClick(){
    console.log(this.element);
    console.log(this.control());
  }
}
