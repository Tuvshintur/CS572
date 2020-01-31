import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    template: `
    <app-counter [counter]="value" (changeEvent)="change($event)"></app-counter>
  `,
    styles: []
})
export class AppComponent {
    title = 'counter';
    public value: number = 0;

    change(val: number) {
        this.value = val;
    }
}
