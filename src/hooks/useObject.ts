import firebase from 'firebase/app';
import { useEffect, useMemo } from 'react';
import { useIsEqualRef } from './refHooks';
import useLoadingValue from './useLoadingValue';

export type LoadingHook<T, E> = [T | undefined, boolean, E | undefined];

export type ObjectHook = LoadingHook<
  firebase.database.DataSnapshot,
  firebase.FirebaseError
>;

export const useObject = (
  query?: firebase.database.Query | null,
): ObjectHook => {
  const { error, loading, reset, setError, setValue, value } =
    useLoadingValue<firebase.database.DataSnapshot, firebase.FirebaseError>();
  const ref = useIsEqualRef(query, reset);

  useEffect(() => {
    const query = ref.current;
    if (!query) {
      setValue(undefined);
      return;
    }

    query.on('value', setValue, setError);

    return () => {
      query.off('value', setValue);
    };
  }, [ref.current]);

  const resArray: ObjectHook = [value, loading, error];
  return useMemo(() => resArray, resArray);
};
