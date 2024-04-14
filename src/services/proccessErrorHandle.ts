import { setAuthStatus, setError } from '../api';
import { AuthorizationStatus } from '../const';
import { store } from '../store';

export const proccessErrorHandle = (message: string) => {
  store.dispatch(setError({errorMessage: message}));
  store.dispatch(setAuthStatus({status: AuthorizationStatus.AUTH}));
};
