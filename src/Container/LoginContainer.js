import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import Swal from 'sweetalert2';
import { auth, database } from '../configs/firebase.config';
import Login from '../Pages/Login';
import { setCurrentUserNameAndID } from '../redux/auth/auth.reducer';
import getFirebaseErrorMessage from '../utils/error/auth/authError';

const LoginContainer = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const [_id, setId] = useState('');
  const [_password, setPassword] = useState('');
  const onIdHandler = (e) => {
    setId(e.currentTarget.value);
  };
  const onPasswordHanlder = (e) => {
    setPassword(e.currentTarget.value);
  };
  const toMainPage = () => {
    history.push('/main');
  };
  const getData = (userId) => {
    database.ref(`users/${userId}`).on('value', (snapshot) => {
      dispatch(
        setCurrentUserNameAndID({
          studentId: snapshot.val().studentID,
          name: snapshot.val().name,
        }),
      );
    });
  };
  const LoginSubmit = (e) => {
    e.preventDefault();
    auth
      .signInWithEmailAndPassword(_id, _password)
      .then((user) => {
        // TODO : 디스패치로 user 값 넣고 추가정보 넣어야함
        getData(user.user.uid);
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
      <Login
        LoginSubmit={LoginSubmit}
        onIdHandler={onIdHandler}
        onPasswordHanlder={onPasswordHanlder}
        toSignUp={toSignUp}
      />
    </>
  );
};

export default LoginContainer;
