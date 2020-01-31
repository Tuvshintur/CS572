import { Component } from '@angular/core';
import { Router } from "@angular/router";
import { Observable } from "rxjs";

@Component({
  selector: 'guards-component',
  template: `
    <p>
      Guards Component!
    </p>
        <button class="btn"(click)="done = true">Done</button>
        <button class="btn btn-alert" (click)="onNavigate()">Go Home</button>
  `
})
export class GuardsComponent {

  done = false;

  constructor(private router: Router) { }

  onNavigate() {
    this.router.navigate(['/']);
  }

  canDeactivate(): Observable<boolean> | boolean {
    if (!this.done) {
      return confirm('Do you want to leave?');
    }
    return true;
  }

}
