import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
// Import our Routes file
import { myRoutes } from "./app.routes";
import { HomeComponent } from './home.component';
import { AboutusComponent } from './aboutus.component';
import { ParamComponent } from './params/param.component';
import { QueryComponent } from './params/query.component';
import { ParentComponent } from './parentchild/parent.component';
import { ChildComponent } from './parentchild/child.component';
import { GuardsComponent } from './guards/guards.component';

import { MyCanActivateGuard } from "./guards/mycanactivate.guard";
import { MyCanDeactivateGuard } from "./guards/mycandeactivate.guard";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutusComponent,
    ParamComponent,
    QueryComponent,
    ParentComponent,
    ChildComponent,
    GuardsComponent
  ],
  imports: [
    BrowserModule,
    myRoutes // add it to imports
  ],
  providers: [MyCanActivateGuard, MyCanDeactivateGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
