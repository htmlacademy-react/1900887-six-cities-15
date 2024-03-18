import { store } from '../store';

export type AppDispatch = typeof store.dispatch;

export type State = ReturnType<typeof store.getState>;
