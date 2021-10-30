import { Directive, ElementRef, HostBinding, HostListener, Input, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appHighlightBetter]'
})
export class HighlightBetterDirective implements OnInit {
  @Input() defaultColor : string = 'transparent';
  @Input() updatedColor : string = 'red';

  @HostBinding('style.background') backgroundColor: string = this.defaultColor;

  constructor(private elementRef: ElementRef, private renderer: Renderer2) { }

  ngOnInit() {
  }

  @HostListener('mouseenter') mouseenter(eventData: Event) {
   // this.renderer.setStyle(this.elementRef.nativeElement,'background-color', 'red');
   this.backgroundColor = this.updatedColor;
  }

  @HostListener('mouseleave') mouseleave(eventData: Event) {
    //this.renderer.setStyle(this.elementRef.nativeElement,'background-color', 'transparent');
    this.backgroundColor = this.defaultColor;
  }

}
