import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import Swal from 'sweetalert2';
import { auth, database } from '../configs/firebase.config';
import SignUp from '../Pages/SignUp';
import { setCurrentUserNameAndID } from '../redux/auth/auth.reducer';
import getFirebaseErrorMessage from '../utils/error/auth/authError';

const SIgnUpContainer = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const [_id, setId] = useState('');
  const [_password, setPassword] = useState('');
  const [studentId, setStudentId] = useState('');
  const [name, setName] = useState('');
  const onIdHandler = (e) => {
    setId(e.currentTarget.value);
  };
  const onPasswordHandler = (e) => {
    setPassword(e.currentTarget.value);
  };
  const onStudentIdHandler = (e) => {
    setStudentId(e.currentTarget.value);
  };
  const onNameHandler = (e) => {
    setName(e.currentTarget.value);
  };

  const linktoLogin = () => {
    history.push('/');
  };

  const writeUserData = (userId, studentID, _name) => {
    database.ref(`users/${userId}`).set({
      studentID,
      name: _name,
      cabinetIdx: 0,
      cabinetTitle: 0,
      adminType: 0,
    });
  };

  const SignUpSubmit = (e) => {
    e.preventDefault();
    auth
      .createUserWithEmailAndPassword(_id, _password)
      .then((user) => {
        history.push('/main');
        writeUserData(user.user.uid, studentId, name);
        dispatch(setCurrentUserNameAndID({ studentId, name }));
      })
      .catch((err) => {
        Swal.fire({
          icon: 'error',
          title: '회원가입 실패',
          text: getFirebaseErrorMessage(err.code),
          showConfirmButton: true,
          width: '25rem',
          timer: 2000,
        });
      });
  };
  return (
    <>
      <SignUp
        SignUpSubmit={SignUpSubmit}
        linktoLogin={linktoLogin}
        onIdHandler={onIdHandler}
        onPasswordHandler={onPasswordHandler}
        onStudentIdHandler={onStudentIdHandler}
        onNameHandler={onNameHandler}
      />
    </>
  );
};

export default SIgnUpContainer;
