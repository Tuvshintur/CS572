import { Component } from '@angular/core';

import { DataService } from './service/data.service';
import { LogService } from './service/log.service';

@Component({
  selector: 'app-root',
  template: `
      <app-comp1></app-comp1>
        <hr />
      <app-comp2></app-comp2>
  `
})
export class AppComponent { }
