import { Injectable } from '@angular/core';
import { HttpClient} from "@angular/common/http"

@Injectable({
  providedIn: 'root'
})
export class FoodService {
  public MYURL:string = "http://localhost:3000";
  public FOODURL:string = `${this.MYURL}/dishes`;
  constructor(private httpClient : HttpClient ) {}

  public getAllDishes() {
    return this.httpClient.get("http://localhost:3000/dishes")
  }
}
