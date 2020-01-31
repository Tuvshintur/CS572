import { Injectable } from '@angular/core';
import { LogService } from './log.service';

@Injectable({ providedIn: 'root' })
export class DataService {
    constructor(private logService: LogService) { }

    private data: string[] = [];

    addData(input: string) {
        this.data = [...this.data, input];
        this.logService.logMe('Saved item: ' + input);
    }

    getData() {
        return this.data;
    }
}
