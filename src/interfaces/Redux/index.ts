import store from '@store/index';

type Action<T> = { type: string; payload: T };
type StoreState = ReturnType<typeof store.getState>;
type StoreDispatch = typeof store.dispatch;

export type { Action, StoreState, StoreDispatch };
