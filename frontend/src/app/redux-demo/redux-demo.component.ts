import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-redux-demo',
  templateUrl: './redux-demo.component.html',
  styleUrls: ['./redux-demo.component.css'],
})
export class ReduxDemoComponent implements OnInit {
  current = 0;
  constructor() {}

  ngOnInit(): void {}

  increment() {
    this.current += 1;
  }

  decrement() {
    this.current -= 1;
  }
}
