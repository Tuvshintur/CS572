import { Component } from '@angular/core';

@Component({
  selector: 'app-parent',
  template: `
    <p>
      Parent Component!
    </p>
    <router-outlet></router-outlet>
  `
})
export class ParentComponent {

}
