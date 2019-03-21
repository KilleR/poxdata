import {Directive, ElementRef, HostBinding, HostListener} from '@angular/core';

@Directive({
  selector: '[poxDraggable]'
})
export class DraggableDirective {

  dragging = false;

  @HostBinding('style.position') position: string;
  @HostBinding('style.top.px') top: number;
  @HostBinding('style.left.px') left: number;

  constructor(el: ElementRef) {
    this.left = el.nativeElement.offsetLeft;
    this.top = el.nativeElement.offsetTop;
    this.position = 'fixed';
  }

  @HostListener('mousedown') onMouseDown() {
    console.log("Mouse down on draggable");
    this.dragging = true;
  }

  @HostListener('mouseup') onMouseUp() {
    console.log("Mouse up on draggable");
    this.dragging = false;
  }

  @HostListener('document:mousemove', ['$event']) onMouseMove(event:MouseEvent) {
    if(this.dragging) {
      this.top += event.movementY;
      this.left += event.movementX;
    }
  }

}
