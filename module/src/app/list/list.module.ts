import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListRoutingModule } from './list-routing.module';
import { ListHomeComponent } from './list-home/list-home.component';
import { StatisticsComponent } from './statistics/statistics.component';
import { SharedModule } from '../shared/shared.module';
import { ItemListComponent } from './item-list/item-list.component';


@NgModule({
  declarations: [
    ListHomeComponent,
    StatisticsComponent,
    ItemListComponent
  ],
  imports: [
    CommonModule,
    ListRoutingModule,
    SharedModule

  ]
})
export class ListModule { }
