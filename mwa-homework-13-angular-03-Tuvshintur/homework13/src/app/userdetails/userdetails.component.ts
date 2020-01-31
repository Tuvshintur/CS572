import { Component, OnInit, OnDestroy, Input, OnChanges } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { map } from 'rxjs/operators';
import { User } from '../user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-userdetails',
  template: `
    <div style="border:1px solid black" *ngIf="user!=null"> 
      <img src="{{user.picture.large}}" alt="{{user.name.first}}" />
      <br/>
      <b>{{user.name.title}}</b>. {{user.name.first}} {{user.name.last}}
    </div>
  `,
  styles: []
})
export class UserdetailsComponent implements OnInit, OnDestroy {

  subscription: Subscription;
  id: number;
  user: User;

  constructor(private route: ActivatedRoute, private userService: UserService) {
    this.subscription = route.params.subscribe((param: any) => {
      this.id = param['uuid'];
    });
  }

  ngOnInit() {
    this.subscription = this.userService.getCachedData().pipe(map(user => user[this.id])).subscribe(user => this.user = user);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
