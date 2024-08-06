import { Directive, ElementRef, HostListener, signal } from '@angular/core';

@Directive({
  selector: '[appFocus]',
  standalone: true
})
export class FocusDirective {

  constructor(private el:ElementRef) { }

  @HostListener("focus") onFocus(){
    this.el.nativeElement.classList.add("italic");
  }

  @HostListener("focusout") onFocusLeave(){
    this.el.nativeElement.classList.remove("italic");
  }

  @HostListener("change") onChange(){
    if (this.el.nativeElement instanceof HTMLInputElement) {
      this.el.nativeElement.classList.add("text-2xl");
    }
  }
}
