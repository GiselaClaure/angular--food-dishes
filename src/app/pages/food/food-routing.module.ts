import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FoodContentComponent } from './components/food-content/food-content.component';

const routes: Routes = [
  {
    path: '', component: FoodContentComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FoodRoutingModule { }
