import { createReducer, on } from '@ngrx/store';
import { counterEventActions } from '../actions/counter.actions';
export interface CounterState {
  current: number;
}

const initialState: CounterState = {
  current: 0,
};

export const reducer = createReducer(
  initialState,
  on(counterEventActions.reset, () => initialState),
  on(counterEventActions.increment, (currentState: CounterState) => ({
    ...currentState,
    current: currentState.current + 1,
  })),
  on(counterEventActions.decrement, (s) => ({ ...s, current: s.current - 1 }))
);
