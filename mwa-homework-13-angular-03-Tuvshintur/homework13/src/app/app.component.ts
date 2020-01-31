import { Component, OnInit, OnDestroy } from '@angular/core';
import { UserService } from './user.service';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  template: `
    <h1>App Component</h1>
    <a [routerLink]="['/']">Home</a> | 
    <a [routerLink]="['users']">users</a>
    <router-outlet></router-outlet>
  `,
  styles: []
})
export class AppComponent implements OnInit, OnDestroy {

  private subscription: Subscription;

  constructor(private userService: UserService) {
  }

  ngOnInit() {
    let users = localStorage.getItem('users');

    if (users === null) {
      this.subscription = this.userService.getOnlineData().subscribe(users => {
        localStorage.setItem("users", JSON.stringify(users))
      });
    } else {
      console.log('already cached');
    }
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
