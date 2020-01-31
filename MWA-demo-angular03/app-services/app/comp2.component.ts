import { Component, OnInit } from '@angular/core';
import { LogService } from './service/log.service';
import { DataService } from './service/data.service';
import { CommunicationService } from './service/communication.service';
@Component({
    selector: 'app-comp2',
    template: `
    <div>
      <input type="text" #input>
      <button (click)="onLog(input.value)">Log</button>
      <button (click)="onStore(input.value)">Store</button>
      <button (click)="onRefresh()">Refresh Storage</button>

    </div>
    <br>
    <div>
        <h3>Storage</h3>
        <ul>
            <li *ngFor="let item of items">{{item}}</li>
        </ul>
        <h3>Received Value</h3>
        <p>{{msg_from_comp1}}</p>
    </div>
  `,
    // providers: [DataService]
})
export class Comp2Component implements OnInit {
    msg_from_comp1 = '';
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
    // Component2 is listening to the Emitter
    ngOnInit() {
        this.communicationService.emitter.subscribe(
            data => this.msg_from_comp1 = data
        );
    }
}
