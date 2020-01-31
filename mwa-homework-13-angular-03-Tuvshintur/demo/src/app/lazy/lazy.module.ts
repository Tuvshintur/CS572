import { CommonModule  } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { LazyComponent } from './lazy.component';

@NgModule({
  declarations: [
    LazyComponent
  ],
  imports: [
    CommonModule ,
    RouterModule.forChild([
        { path: '', component: LazyComponent }
      ])
  ],
  providers: [],
  bootstrap: [LazyComponent]
})
export class LazyModule { }
