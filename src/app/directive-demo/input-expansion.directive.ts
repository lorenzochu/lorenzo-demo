import { AfterViewInit, Directive, ElementRef, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appInputExpansion]',
  exportAs: 'inputExp'
})
export class InputExpansionDirective implements AfterViewInit {

  random = Math.random();
  // @HostBinding('class.customInput1') get test1() { return this.random > 0.5; }
  // @HostBinding('class.customInput2') get test2() { return this.random <= 0.5; }
  @HostBinding('class.customInput3')

  @HostListener('focus', ['$event']) onfocus() {
    console.warn('focusing!!!');
  }

  @HostListener('click', ['$event']) onclick() {
    this.random = Math.random();
  }

  constructor(private elementRef: ElementRef) { }

  ngAfterViewInit() {
    (this.elementRef.nativeElement as HTMLInputElement).style.backgroundColor = 'yellow';
    (this.elementRef.nativeElement as HTMLInputElement).style.color = 'red';
  }

}
