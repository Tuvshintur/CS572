import { Component } from '@angular/core';

import { ActivatedRoute } from "@angular/router";
import { Subscription } from "rxjs";

@Component({
  selector: 'app-param',
  template: `
    <p>
      Parameter ID: {{id}}
    </p>
  `
})
export class ParamComponent {
  private subscription: Subscription;
  id: string;

  constructor(private activatedRoute: ActivatedRoute) {
    this.subscription = activatedRoute.params.subscribe(
      (params: any) => this.id = params['id']
    );
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
