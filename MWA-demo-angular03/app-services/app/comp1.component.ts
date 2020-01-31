import { Component } from '@angular/core';
import { LogService } from './service/log.service';
import { DataService } from './service/data.service';
import { CommunicationService } from './service/communication.service';
@Component({
    selector: 'app-comp1',
    template: `
    <div>
      <input type="text" #input>
      <button (click)="onLog(input.value)">Log</button>
      <button (click)="onStore(input.value)">Store</button>
      <button (click)="onRefresh()">Refresh Storage</button>
      <button (click)="onSend(input.value)">Send to Component 2</button>
    </div>
    <br>
    <div>
        <h3>Storage</h3>
        <ul>
            <li *ngFor="let item of items">{{item}}</li>
        </ul>
    </div>
  `,
    // providers: [DataService]
})
export class Comp1Component {
    items: string[] = [];

    constructor(private logService: LogService, private dataService: DataService, private communicationService: CommunicationService) { }
    onLog(value: string) {
        this.logService.logMe(value);
    }
    onStore(value: string) {
        this.dataService.addData(value);
        this.items = this.dataService.getData();
    }
    onRefresh() {
        this.items = this.dataService.getData();
    }

    // send msg to Component2 
    onSend(value: string) {
        this.communicationService.emitValue(value);
    }
}
