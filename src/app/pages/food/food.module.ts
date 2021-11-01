import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FoodRoutingModule } from './food-routing.module';
import { FoodContentComponent } from './components/food-content/food-content.component';


@NgModule({
  declarations: [
    FoodContentComponent
  ],
  imports: [
    CommonModule,
    FoodRoutingModule,
  ]
})
export class FoodModule { }
