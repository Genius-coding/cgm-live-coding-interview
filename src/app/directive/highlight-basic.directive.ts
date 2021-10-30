import { Directive, ElementRef, OnInit } from '@angular/core';
import { element } from 'protractor';

@Directive({ selector: '[highlightBasic]' })
export class HighlightBasicDirective implements OnInit {
    constructor(private elementRef: ElementRef) { }

    ngOnInit() {
        this.elementRef.nativeElement.style.background = 'blue';
    }
}