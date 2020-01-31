import { Component, OnInit, Input, OnChanges, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
    selector: 'app-counter',
    template: `<button (click)="decrement()">-</button>
      {{ counter }}
    <button (click)="increment()">+</button>`,
    styles: []
})
export class CounterComponent implements OnInit {

    @Input() counter: number;
    @Output() changeEvent = new EventEmitter();

    public current: number;

    constructor() { }

    ngOnInit() {
        this.current = this.counter;
    }

    decrement() {
        this.current--;
        this.changeEvent.emit(this.current.toString());
    }

    increment() {
        this.current++;
        this.changeEvent.emit(this.current.toString());
    }

}
