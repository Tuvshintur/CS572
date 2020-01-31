import { Directive, ElementRef, Renderer2, Input, OnInit } from '@angular/core';

@Directive({
    selector: '[appIsVisible]'
})
export class IsVisibleDirective {

    @Input('appIsVisible') value: boolean;

    constructor(private elementRef: ElementRef, private renderer2: Renderer2) { }

    ngOnInit(): void {
        if (this.value)
            this.show();
        else
            this.hide();
    }

    show() {
        this.renderer2.setStyle(this.elementRef.nativeElement, 'display', 'block');
    }

    hide() {
        this.renderer2.setStyle(this.elementRef.nativeElement, 'display', 'none');
    }

}
