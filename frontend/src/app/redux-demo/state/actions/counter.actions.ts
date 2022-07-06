import { createActionGroup, emptyProps } from '@ngrx/store';

export const counterEventActions = createActionGroup({
  source: 'Counter Component Events',
  events: {
    increment: emptyProps(),
    decrement: emptyProps(),
    reset: emptyProps(),
  },
});
