import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <div class="container">
    <div class="row">
        <div class="col-xs-10">
            <h1>Routing Examples!</h1>
            <hr>
            <a [routerLink]="['']">Home</a> |
            <a [routerLink]="['aboutus']">About Us</a> |
            <a [routerLink]="['param', 1979]">Param</a> |
            <a [routerLink]="['query']" [queryParams]="{id: 1979}">Query Param</a> |
            <a [routerLink]="['parent']">Parent</a> |
            <a [routerLink]="['parent', 'child']">Parent-Child</a> |
            <a [routerLink]="['guards']">Guards</a>
            <hr>
            <router-outlet></router-outlet>
        </div>
    </div>
</div>
  `
})
export class AppComponent { }
