import { Component, OnInit, OnChanges, TemplateRef } from '@angular/core';
import { Observable } from 'rxjs';
import { UserService } from '../user.service';
import { User } from '../user';

@Component({
  selector: 'app-users',
  template: `
    <div *ngIf="(users$ | async).length;else loading">
      <div *ngFor="let user of users$ | async; let i = index" class="user">
        <a [routerLink]="[i]">
          {{i}}). <b>{{user.name.title}}</b>. {{user.name.first}} {{user.name.last}}
        </a>
      </div>
      <app-userdetails></app-userdetails>
    </div>
  `,
  styles: ['.user {cursor: pointer;}']
})

export class UsersComponent implements OnInit {

  users$: Observable<User[]>;

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.users$ = this.userService.getCachedData();
  }

}
