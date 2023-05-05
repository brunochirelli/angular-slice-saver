import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PizzaService {
  private amountOfPizzasSubject = new BehaviorSubject<number | null>(null);
  public amountOfPizzas$ = this.amountOfPizzasSubject.asObservable();

  /**
   * Calculates the number of pizzas needed to feed a group of people.
   */
  public calculatePizzaQuantity(
    numberOfPeople: number,
    slicesPerPizza: number,
    slicesPerPerson: number
  ): void {
    const totalSlices = numberOfPeople * slicesPerPerson;
    const pizzaQuantity = Math.ceil(totalSlices / slicesPerPizza);
    this.amountOfPizzasSubject.next(pizzaQuantity);
  }
}
