import { store } from '../store';
import { setError } from '../store/action';

export const proccessErrorHandle = (message: string) => {
  store.dispatch(setError(message));
  store.dispatch();
};
