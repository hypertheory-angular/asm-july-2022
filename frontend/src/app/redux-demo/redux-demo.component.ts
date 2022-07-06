import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { counterEventActions } from './state/actions/counter.actions';
@Component({
  selector: 'app-redux-demo',
  templateUrl: './redux-demo.component.html',
  styleUrls: ['./redux-demo.component.css'],
})
export class ReduxDemoComponent implements OnInit {
  constructor(private store: Store) {}

  ngOnInit(): void {}

  increment() {
    this.store.dispatch(counterEventActions.increment());
  }

  decrement() {
    this.store.dispatch(counterEventActions.decrement());
  }
}
