import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    template: `
        <app-smart [ngStyle]="{'font-size': '12px'}" appIsVisible="true" appMakeBigger></app-smart>

        <div>{{title | multi:3}} </div>
    `,
    styles: []
})
export class AppComponent {
    title = 'homework12';
}
