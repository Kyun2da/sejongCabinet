import { useState, useMemo } from 'react';
import firebase from 'firebase/app';
import { EmailAndPasswordActionHook } from '../types/firebasehooks';
export default () => {
  const [error, setError] = useState<firebase.FirebaseError>();
  const [loading, setLoading] = useState<boolean>(false);

  const updatePasswordWithNewPassword = async (
    email: string,
    password: string,
    newPassword: string,
  ) => {
    setLoading(true);

    try {
      const user = firebase.auth().currentUser;
      const credential = firebase.auth.EmailAuthProvider.credential(
        email,
        password,
      );
      if (user) {
        await user.reauthenticateWithCredential(credential).then(() => {
          user.updatePassword(newPassword);
        });
      }
      setError(undefined);
      setLoading(false);
    } catch (e) {
      setError(e);
      setLoading(false);
    }
  };

  const resArray: any = [updatePasswordWithNewPassword, loading, error];

  return useMemo<any>(() => resArray, resArray);
};
