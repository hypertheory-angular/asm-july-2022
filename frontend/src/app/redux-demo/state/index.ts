import { ActionReducerMap } from '@ngrx/store';

import * as fromCounter from './reducers/counter.reducer';

export const FEATURE_NAME = 'Redux Feature';

export interface ReduxDemoState {
  counter: fromCounter.CounterState;
}

export const reducers: ActionReducerMap<ReduxDemoState> = {
  counter: fromCounter.reducer,
};
