import React, { useState, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { auth, database } from '../configs/firebase.config';
import SignUp from '../Pages/SignUp';
import SignUpMobile from '../Mobile/SignUpMobile';
import { Mobile, Default } from '../MediaQuery';
import { setCurrentUserNameAndID } from '../redux/auth/auth.reducer';
import getFirebaseErrorMessage from '../utils/error/auth/authError';
import customSwal from '../utils/alert/swal';

const SIgnUpContainer = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const [_password, setPassword] = useState('');
  const [studentId, setStudentId] = useState('');
  const [name, setName] = useState('');
  const onPasswordHandler = useCallback((e) => {
    setPassword(e.currentTarget.value);
  }, []);
  const onStudentIdHandler = useCallback((e) => {
    setStudentId(e.currentTarget.value);
  }, []);
  const onNameHandler = useCallback((e) => {
    setName(e.currentTarget.value);
  }, []);

  const linktoLogin = useCallback(() => {
    history.push('/');
  }, [history]);

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
      .createUserWithEmailAndPassword(`${studentId}@sjcabinet.com`, _password)
      .then((user) => {
        history.push('/main');
        writeUserData(user.user.uid, studentId, name);
        dispatch(setCurrentUserNameAndID({ studentId, name }));
      })
      .catch((err) => {
        customSwal('error', '회원가입 실패', getFirebaseErrorMessage(err.code));
      });
  };
  return (
    <>
      <Default>
        <SignUp
          SignUpSubmit={SignUpSubmit}
          linktoLogin={linktoLogin}
          onPasswordHandler={onPasswordHandler}
          onStudentIdHandler={onStudentIdHandler}
          onNameHandler={onNameHandler}
          password={_password}
          studentID={studentId}
          name={name}
        />
      </Default>
      <Mobile>
        <SignUpMobile
          SignUpSubmit={SignUpSubmit}
          linktoLogin={linktoLogin}
          onPasswordHandler={onPasswordHandler}
          onStudentIdHandler={onStudentIdHandler}
          onNameHandler={onNameHandler}
          password={_password}
          studentID={studentId}
          name={name}
        />
      </Mobile>
    </>
  );
};

export default React.memo(SIgnUpContainer);
