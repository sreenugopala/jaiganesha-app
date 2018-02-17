import { Directive,ElementRef } from '@angular/core';

@Directive({
  selector: '[appColorBlue]'
})
export class ColorBlueDirective {

  constructor(Element: ElementRef) {
    console.log(Element);
    Element.nativeElement.innerText="Text is changed by changeText Directive. ";
    Element.nativeElement.style.color="blue";
  }

  ngAfterViewInit(): void {
  }
}
