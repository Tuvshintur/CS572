import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class LogService {
  logMe(msg: string) {
    console.log(msg);
  }
}