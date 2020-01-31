import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
@Component({
  selector: 'app-aboutus',
  template: `
    <p>
      About Us!
    </p>
    <button (click)="onNavigate()">Go Home</button>
  `,
  styles: []
})
export class AboutusComponent  {
  
  constructor(private router: Router){}

  onNavigate() {
    // Imperative Routing
    this.router.navigate(['/']);
  }

}
