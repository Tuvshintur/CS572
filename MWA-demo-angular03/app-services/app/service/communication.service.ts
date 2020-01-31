import { Injectable, EventEmitter } from '@angular/core';
import { LogService } from './log.service';

@Injectable({ providedIn: 'root' })
export class CommunicationService {

    emitter = new EventEmitter<string>();
    emitValue(value: string) {
        this.emitter.emit(value);
    }

}
