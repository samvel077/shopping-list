import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-counter-input',
  templateUrl: './counter-input.component.html',
  styleUrls: ['./counter-input.component.scss'],
})
export class CounterInputComponent {
  value: number = 0;
  step: number = 1;
  min: number = 0;
  max: number = Infinity;

  private _color: string = 'default';

  @Input('value')
  set inputValue(value: number) {
    this.value = value;
  }

  @Input('step')
  set setStep(step: number) {
    this.step = step;
  }

  @Input('min')
  set setMin(min: number) {
    this.min = min;
  }

  @Input('max')
  set setMax(max: number) {
    this.max = max;
  }

  @Input('color')
  set setColor(color: string) {
    this.color = color;
  }

  @Output() valueChange = new EventEmitter();

  set color(color: string) {
    this._color = color;
  }

  get color(): string {
    return this._color;
  }

  incrementValue(step: number = 1): void {
    let inputValue = this.value + step;

    this.value = inputValue;
    this.valueChange.emit(this.value);
  }

  shouldDisableDecrement(inputValue: number): boolean {
    return inputValue <= this.min;
  }

  shouldDisableIncrement(inputValue: number): boolean {
    return inputValue >= this.max;
  }
}
