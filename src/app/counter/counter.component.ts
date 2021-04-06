import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css'],
})
export class CounterComponent implements OnInit {
  counter = 0;

  constructor() {}

  ngOnInit(): void {}

  // Increments
  increment(): void {
    this.counter++;
  }

  // Decrements
  decrement(): void {
    this.counter--;
  }

  // Resets
  reset(): void {
    this.counter = 0;
  }
}
