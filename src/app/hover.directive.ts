import { Directive, ElementRef, HostListener, Input, input, OnChanges, SimpleChanges } from '@angular/core';

@Directive({
  selector: '[appHover]',
  standalone: true
})
export class HoverDirective{

  appHover=input<string>();
  defaultColor=input<string>();

  constructor(private el:ElementRef) { 
  }

  @HostListener("mouseenter") onMouseEnter(){
    this.el.nativeElement.classList.add(this.appHover()|| this.defaultColor() || "bg-blue-300");
  }


  @HostListener('mouseleave') onMouseLeave(){
    this.el.nativeElement.classList.remove(this.appHover()|| this.defaultColor()|| "bg-blue-300");
  }

}
