import firebase from 'firebase/compat/app';
import { useEffect, useMemo } from 'react';
import useLoadingValue from './useLoadingValue';
import { LoadingHook } from './useObject';

export type AuthStateHook = LoadingHook<
  firebase.User | null,
  firebase.auth.Error
>;

export default (auth: firebase.auth.Auth): AuthStateHook => {
  const { error, loading, setError, setValue, value } = useLoadingValue<
    firebase.User | null,
    firebase.auth.Error
  >(() => auth.currentUser);

  useEffect(() => {
    const listener = auth.onAuthStateChanged(setValue, setError);

    return () => {
      listener();
    };
  }, [auth]);

  const resArray: AuthStateHook = [value, loading, error];
  return useMemo<AuthStateHook>(() => resArray, resArray);
};
