import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-smart',
  template: '<app-dumb [arrayOfObjects]="arrayOfObjects"></app-dumb>',
  styles: []
})
export class SmartComponent implements OnInit {

  public arrayOfObjects = [{ "item": "haha" }, { "item": "hehe" }, { "item": "hoho" }];

  constructor() { }

  ngOnInit() {
  }

}
