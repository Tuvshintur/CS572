import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersComponent } from './users.component';
import { RouterModule } from '@angular/router';
import { UserdetailsComponent } from '../userdetails/userdetails.component';
import { MyGuard } from '../my-guard.guard';

@NgModule({
  declarations: [
    UsersComponent,
    UserdetailsComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: '', component: UsersComponent },
      {
        path: ':uuid', component: UserdetailsComponent,
        canActivate: [MyGuard]
      }
    ])
  ],
  bootstrap: [UsersComponent]
})
export class UsersModule { }
