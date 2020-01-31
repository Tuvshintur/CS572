import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from "@angular/router";
import { Subscription } from "rxjs";

@Component({
  selector: 'app-query',
  template: `
    <p>
      Query Parameter ID: {{id}}
    </p>
  `
})
export class QueryComponent {

  private subscription: Subscription;
  id: string;


  constructor(private activatedRoute: ActivatedRoute) {
    this.subscription = activatedRoute.queryParams
      .subscribe(
        (queries: any) => this.id = queries['id']
      );
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
