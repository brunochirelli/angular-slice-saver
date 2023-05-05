import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { PizzaService } from '../../services/pizza.service';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-splitter-form',
  templateUrl: './splitter-form.component.html',
  styleUrls: ['./splitter-form.component.css'],
})
export class SplitterFormComponent implements OnInit {
  splitterForm = new FormGroup({
    numberOfPeople: new FormControl(1, [
      Validators.required,
      Validators.min(1),
    ]),
    slicesPerPizza: new FormControl(8, [
      Validators.required,
      Validators.min(2),
    ]),
    piecesPerPizza: new FormControl(4, [
      Validators.required,
      Validators.min(1),
    ]),
  });

  isFormValidSubject = new BehaviorSubject<boolean>(true);
  isFormValid$ = this.isFormValidSubject.asObservable();

  numberOfPizzas$ = this.pizzaService.amountOfPizzas$;

  constructor(private pizzaService: PizzaService) {}

  ngOnInit(): void {
    this.splitterForm.valueChanges.subscribe(() => {
      this.isFormValidSubject.next(this.isFormValid());
    });
  }

  private isFormValid = (): boolean => this.splitterForm.valid;

  public onSubmit = (): void =>  {
    const { numberOfPeople, slicesPerPizza, piecesPerPizza } =
      this.splitterForm.value;

    this.pizzaService.calculatePizzaQuantity(
      numberOfPeople as number,
      slicesPerPizza as number,
      piecesPerPizza as number
    );
  };
}
