import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';


import { AppComponent } from './app.component';
import { HomeComponent } from './home.component';
import { EagerModule } from './eager/eager.module';
import { EagerComponent } from './eager/eager.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    EagerModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent },
      { path: 'eager', children: [{ path: '', component: EagerComponent }] }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
