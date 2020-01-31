import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <h1>App Component</h1>
    <a [routerLink]="['/']">Home</a> | 
    <a [routerLink]="['lazy']">Load Lazy Component from Lazy Module</a>
    <router-outlet></router-outlet>
  `,
})
export class AppComponent { }
