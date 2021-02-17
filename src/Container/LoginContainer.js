import React, { useState, useCallback } from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import Swal from 'sweetalert2';
import { auth } from '../configs/firebase.config';
import Login from '../Pages/Login';
import getFirebaseErrorMessage from '../utils/error/auth/authError';
import LoginMobile from '../Mobile/LoginMobile';
import { Mobile, Default } from '../MediaQuery';

const LoginContainer = () => {
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
          Swal.fire({
            icon: 'error',
            title: '로그인 실패',
            text: getFirebaseErrorMessage(err.code),
            showConfirmButton: true,
            width: '25rem',
            timer: 2000,
          });
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

export default React.memo(LoginContainer);
