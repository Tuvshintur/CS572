import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'app-dumb',
    template: `
        <ul>
            <li *ngFor="let item of arrayOfObjects">
                {{item.item}}
            </li>
        </ul>
    `,
    styles: []
})
export class DumbComponent implements OnInit {

    @Input() arrayOfObjects;

    constructor() { }

    ngOnInit() {
    }

}
