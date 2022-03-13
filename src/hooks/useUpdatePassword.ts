import firebase from 'firebase/compat/app';
import { useMemo, useState } from 'react';

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
    } catch (e: any) {
      setError(e);
      setLoading(false);
    }
  };

  const resArray: any = [updatePasswordWithNewPassword, loading, error];

  return useMemo<any>(() => resArray, resArray);
};
