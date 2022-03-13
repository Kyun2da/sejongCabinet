import firebase from 'firebase/compat/app';
import { useMemo, useState } from 'react';
import { EmailAndPasswordActionHook } from '../types/firebasehooks';

export default (auth: firebase.auth.Auth): EmailAndPasswordActionHook => {
  const [error, setError] = useState<firebase.FirebaseError>();
  const [loggedInUser, setLoggedInUser] =
    useState<firebase.auth.UserCredential>();
  const [loading, setLoading] = useState<boolean>(false);

  const signInwithEmailAndPassword = async (
    email: string,
    password: string,
  ) => {
    setLoading(true);
    try {
      const user = await auth.signInWithEmailAndPassword(email, password);
      setLoggedInUser(user);
      setLoading(false);
    } catch (e: any) {
      setError(e);
      setLoading(false);
    }
  };

  const resArray: EmailAndPasswordActionHook = [
    signInwithEmailAndPassword,
    loggedInUser,
    loading,
    error,
  ];

  return useMemo<EmailAndPasswordActionHook>(() => resArray, resArray);
};
