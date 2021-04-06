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

  increment(): void {
    // this.counter++;
  }

  decrement(): void {
    this.counter--;
  }

  reset(): void {
    this.counter = 0;
  }
}
