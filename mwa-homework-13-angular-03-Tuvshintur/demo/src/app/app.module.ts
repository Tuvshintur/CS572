import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './home.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent },
      { path: 'lazy', loadChildren: () => import('./lazy/lazy.module').then(m => m.LazyModule) }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
