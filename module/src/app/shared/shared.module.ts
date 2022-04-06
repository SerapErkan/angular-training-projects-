import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { DivederComponent } from './diveder/diveder.component';


@NgModule({
  declarations: [
    DivederComponent
  ],
  imports: [
    CommonModule,
    SharedRoutingModule
  ],
  exports:[
DivederComponent
  ]
})
export class SharedModule { }
