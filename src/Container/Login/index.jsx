import React, { useState, useCallback } from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { auth } from '../../configs/firebase.config';
import getFirebaseErrorMessage from '../../utils/error/auth/authError';
import customSwal from '../../utils/alert/swal';
import Login from '../../Pages/Login';
import LoginMobile from '../../Mobile/LoginMobile';
import { Default, Mobile } from '../../MediaQuery';

const LoginPageContainer = () => {
  const history = useHistory();
  const [_id, setId] = useState('');
  const [_password, setPassword] = useState('');
  const userId = useSelector((state) => state.auth.currentUser.uid);

  const onIdHandler = useCallback((e) => {
    setId(e.currentTarget.value);
  }, []);

  const onPasswordHanlder = useCallback((e) => {
    setPassword(e.currentTarget.value);
  }, []);

  const toMainPage = useCallback(() => {
    history.push('/main');
  }, [history]);

  const LoginSubmit = useCallback(
    (e) => {
      e.preventDefault();
      auth
        .signInWithEmailAndPassword(`${_id}@sjcabinet.com`, _password)
        .then(() => {
          toMainPage();
        })
        .catch((err) => {
          customSwal('error', '로그인 실패', getFirebaseErrorMessage(err.code));
        });
    },
    [_id, _password, toMainPage],
  );

  const toSignUp = useCallback(() => {
    history.push('/signup');
  }, [history]);
  return (
    <>
      {userId ? (
        toMainPage()
      ) : (
        <>
          <Default>
            <Login
              LoginSubmit={LoginSubmit}
              onIdHandler={onIdHandler}
              onPasswordHanlder={onPasswordHanlder}
              toSignUp={toSignUp}
            />
          </Default>
          <Mobile>
            <LoginMobile
              LoginSubmit={LoginSubmit}
              onIdHandler={onIdHandler}
              onPasswordHanlder={onPasswordHanlder}
              toSignUp={toSignUp}
            />
          </Mobile>
        </>
      )}
    </>
  );
};

export default React.memo(LoginPageContainer);
