import { Directive, ElementRef, Renderer2, Input, OnInit, HostListener } from '@angular/core';

@Directive({
    selector: '[appMakeBigger]'
})
export class MakeBiggerDirective {

    @Input('appMakeBigger') fontSize: string;

    constructor(private elementRef: ElementRef, private renderer2: Renderer2) { }

    ngOnInit(): void {
        this.fontSize = this.elementRef.nativeElement.style.fontSize;
        console.log(this.fontSize);
        this.renderer2.setStyle(this.elementRef.nativeElement, 'fontSize', this.fontSize);
    }

    @HostListener('click') mouseEnter() {
        this.fontSize = (parseInt(this.elementRef.nativeElement.style.fontSize.replace("px", "")) + 2) + "px";
        this.renderer2.setStyle(this.elementRef.nativeElement, 'fontSize', this.fontSize);
    }

}
