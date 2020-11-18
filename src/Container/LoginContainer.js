import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import Swal from 'sweetalert2';
import { auth } from '../configs/firebase.config';
import Login from '../Pages/Login';
import getFirebaseErrorMessage from '../utils/error/auth/authError';

const LoginContainer = () => {
  const history = useHistory();
  const [_id, setId] = useState('');
  const [_password, setPassword] = useState('');
  const userId = useSelector((state) => state.auth.currentUser.uid);
  const onIdHandler = (e) => {
    setId(e.currentTarget.value);
  };
  const onPasswordHanlder = (e) => {
    setPassword(e.currentTarget.value);
  };
  const toMainPage = () => {
    history.push('/main');
  };
  const LoginSubmit = (e) => {
    e.preventDefault();
    auth
      .signInWithEmailAndPassword(_id, _password)
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
  };

  const toSignUp = () => {
    history.push('/signup');
  };
  return (
    <>
      {userId ? (
        toMainPage()
      ) : (
        <Login
          LoginSubmit={LoginSubmit}
          onIdHandler={onIdHandler}
          onPasswordHanlder={onPasswordHanlder}
          toSignUp={toSignUp}
        />
      )}
    </>
  );
};

export default LoginContainer;
