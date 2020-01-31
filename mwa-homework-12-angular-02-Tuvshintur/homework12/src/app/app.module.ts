import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DumbComponent } from './dumb/dumb.component';
import { SmartComponent } from './smart/smart.component';
import { IsVisibleDirective } from './is-visible.directive';
import { MakeBiggerDirective } from './make-bigger.directive';
import { Multi } from './multi';

@NgModule({
    declarations: [
        AppComponent,
        DumbComponent,
        SmartComponent,
        IsVisibleDirective,
        MakeBiggerDirective,
        Multi
    ],
    imports: [
        BrowserModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
