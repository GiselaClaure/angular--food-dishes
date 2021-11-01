import { Component, OnInit } from '@angular/core';
import { FoodInterface } from '../../models/food.model';
import { FoodService } from '../../services/food.service';

@Component({
  selector: 'app-food-content',
  templateUrl: './food-content.component.html',
  styleUrls: ['./food-content.component.scss']
})
export class FoodContentComponent implements OnInit {
  public foodList?: FoodInterface[];

  constructor(public foodService: FoodService ) { }

  ngOnInit(): void {
    this.foodService.getAllDishes().subscribe((element: any)=>{
      const apiResults: FoodInterface[]= element.data.dish;
      console.log(element)
      const formattedResults = apiResults.map(({name, type, photo, description})=>({
        name,
        type,
        photo,
        description
      }));

      this.foodList = formattedResults; 
      console.log(this.foodList)
    })
    
  }
  

}
