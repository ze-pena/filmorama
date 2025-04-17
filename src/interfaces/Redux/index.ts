import store from '@store/index';

type Action<T> = { type: string; payload: T };
type StoreState = ReturnType<typeof store.getState>;

export type { Action, StoreState };
