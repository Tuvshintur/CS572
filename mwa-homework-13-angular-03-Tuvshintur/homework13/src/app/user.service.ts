import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { of } from 'rxjs';
import { delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(public http: HttpClient) { }

  getOnlineData() {
    return this.http.get('https://randomuser.me/api/?results=10');
  }

  getCachedData() {
    let users = localStorage.getItem('users');

    if (users !== null)
      return of(JSON.parse(users).results);
  }
}
