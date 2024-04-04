import { AuthorizationStatus } from '../const';
import { store } from '../store';
import { requireAuthorization, setError } from '../store/action';

export const proccessErrorHandle = (message: string) => {
  store.dispatch(setError(message));
  store.dispatch(requireAuthorization(AuthorizationStatus.NO_AUTH));
};
