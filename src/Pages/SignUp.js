import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';
import { CSSTransitionGroup } from 'react-transition-group';
import { TextField, Button, makeStyles, Img } from '@material-ui/core';
import Swal from 'sweetalert2';
import { useDispatch } from 'react-redux';
import Logo from '../image/Logo.png';
import { Mobile, Default } from '../MediaQuery';
import './Fadeout.css';
import { auth, database } from '../configs/firebase.config';
import getFirebaseErrorMessage from '../utils/error/auth/authError';
import { setCurrentUserNameAndID } from '../redux/auth/auth.reducer';
import backwards from '../image/Backward.png';

const Container = styled.div`
  display: flex;
  justify-contents: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: 98vh;
`;

const MobileDivider = styled.div`
  border-bottom: 2px solid lightgray;
  width: 85%;
  margin: 5vh 1vw;
`;

const useStyles = makeStyles((theme) => ({
  backwards: {
    opacity: 0.6,

    '&:hover': {
      backgroundColor: 'transparent',
      opacity: 1,
    },
  },
}));

const SignUp = () => {
  const classes = useStyles();
  const history = useHistory();
  const dispatch = useDispatch();
  const [_id, setId] = useState('');
  const [_password, setPassword] = useState('');
  const [studentId, setStudentId] = useState('');
  const [name, setName] = useState('');
  const onIdHandler = (e) => {
    console.log(e.currentTarget.value);
    setId(e.currentTarget.value);
  };
  const onPasswordHanlder = (e) => {
    console.log(e.currentTarget.value);
    setPassword(e.currentTarget.value);
  };
  const onStudentIdHanlder = (e) => {
    console.log(e.currentTarget.value);
    setStudentId(e.currentTarget.value);
  };
  const onNameHanlder = (e) => {
    console.log(e.currentTarget.value);
    setName(e.currentTarget.value);
  };

  const linktoLogin = () => {
    history.push('/');
  };

  const writeUserData = (userId, studentID, _name) => {
    database.ref(`users/${userId}`).set({
      studentID,
      name: _name,
    });
  };

  const SignUpSubmit = (e) => {
    console.log('회원가입 버튼 클릭');
    e.preventDefault();
    auth
      .createUserWithEmailAndPassword(_id, _password)
      .then((user) => {
        console.log(user);
        history.push('/main');
        writeUserData(user.user.uid, studentId, name);
        dispatch(setCurrentUserNameAndID({ studentId, name }));
      })
      .catch((err) => {
        console.log(err);
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
    <CSSTransitionGroup
      transitionName="homeTransition"
      transitionAppear="true"
      transitionAppearTimeout={500}
      transitionEnter={false}
      transitionLeave={false}
    >
      <Container>
        <Default>
          <img
            src={Logo}
            alt="logo"
            width="80vw"
            style={{ margin: '1vh 0 0 ' }}
          />

          <p
            style={{
              fontSize: '0.8vw',
              fontWeight: 'bold',
              letterSpacing: '0.5vw',
              borderBottom: '0.1vw solid black',
              margin: '0.7rem 0 0',
            }}
          >
            SEJONG UNIV
          </p>
          <p
            style={{
              fontSize: '0.6vw',
              fontWeight: 'bolder',
              letterSpacing: '0.4vw',
              margin: '0.15rem 0 2rem',
            }}
          >
            소프트웨어학과 사물함
          </p>
          <form
            onSubmit={SignUpSubmit}
            noValidate
            name="signUp"
            autoComplete="off"
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              flexDirection: 'column',
              display: 'flex',
              borderTop: '3px solid lightgray',
              borderBottom: '3px solid lightgray',
              padding: '2vh 5vw 6vh',
              borderRadius: '2rem',
            }}
          >
            <div
              style={{
                display: 'inline-flex',
                flexDirection: 'row',
                width: '100%',
              }}
            >
              <Button
                style={{
                  position: 'absolute',
                  backgroundColor: 'transparent',
                  width: 'auto',
                }}
                onClick={linktoLogin}
                className={classes.backwards}
              >
                <img
                  src={backwards}
                  alt="toLogin"
                  width="20rem"
                  style={{ margin: '2vh 1vw auto 0' }}
                />
              </Button>
              <div style={{ width: '100%' }}>
                <p
                  style={{
                    fontSize: '2.5rem',
                    fontWeight: 'bold',
                    letterSpacing: '0.1vw',
                    marginTop: '1vh',
                    textAlign: 'center',
                  }}
                >
                  회원가입
                </p>
              </div>
            </div>
            <TextField
              id="id"
              label="Email"
              placeholder="aaa@example.com 형식으로 입력해주세요."
              type="email"
              variant="outlined"
              onChange={onIdHandler}
              style={{ width: '30vw', margin: '1.5vh' }}
            />
            <TextField
              id="password"
              label="Password"
              placeholder="6글자 이상의 패스워드를 입력해주세요."
              type="password"
              variant="outlined"
              onChange={onPasswordHanlder}
              style={{ width: '30vw', margin: '1.5vh' }}
            />
            <TextField
              id="studentID"
              label="학번"
              placeholder="학번을 입력해주세요."
              type="text"
              variant="outlined"
              onChange={onStudentIdHanlder}
              style={{ width: '30vw', margin: '1.5vh' }}
            />
            <TextField
              id="name"
              label="이름"
              placeholder="이름을 입력해주세요."
              type="text"
              variant="outlined"
              onChange={onNameHanlder}
              style={{ width: '30vw', margin: '1.5vh' }}
            />
            <Button
              variant="contained"
              type="submit"
              style={{
                width: '30vw',
                height: '5vh',
                backgroundColor: 'rgb(63,81,181)',
                color: 'white',
                border: '1px solid rgb(63,81,181)',
                marginTop: '1vh',
              }}
            >
              회원가입
            </Button>
          </form>
        </Default>

        <Mobile style={{ textalign: 'center' }}>
          <img
            src={Logo}
            alt="logo"
            width="60vw"
            style={{ margin: '3vh 0 0' }}
          />
          <p
            style={{
              fontSize: '0.8vw',
              fontWeight: 'bold',
              letterSpacing: '0.5vw',
              borderBottom: '0.1vw solid black',
              margin: '0.7rem 0 0',
            }}
          >
            SEJONG UNIV
          </p>
          <p
            style={{
              fontSize: '0.6vw',
              fontWeight: 'bolder',
              letterSpacing: '0.4vw',
              margin: '0.15rem 0 0',
            }}
          >
            소프트웨어학과 사물함
          </p>

          <form
            noValidate
            autoComplete="off"
            style={{
              justifyContent: 'center',
              flexDirection: 'column',
              display: 'flex',
              margin: '0.5vh 0',
            }}
          >
            <div
              style={{
                display: 'inline-flex',
                flexDirection: 'row',
                width: '100%',
                marginTop: '1rem',
                borderTop: '2px solid lightgray',
              }}
            >
              <Button
                style={{
                  position: 'absolute',
                  height: 'auto',
                }}
                onClick={linktoLogin}
                className={classes.backwards}
              >
                <img
                  src={backwards}
                  alt="toLogin"
                  width="9vw"
                  style={{ margin: '5vh 8vw auto 0' }}
                />
              </Button>

              <div style={{ width: '100%' }}>
                <p
                  style={{
                    fontSize: '4vh',
                    fontWeight: 'bold',
                    width: '100%',
                    textAlign: 'center',
                  }}
                >
                  회원가입
                </p>
              </div>
            </div>
            <TextField
              id="id"
              label="ID"
              variant="outlined"
              style={{ width: '80vw', margin: '1vh 0.1vw' }}
            />
            <TextField
              id="password"
              label="Password"
              variant="outlined"
              style={{ width: '80vw', margin: '1vh 0.1vw' }}
            />
            <TextField
              id="studentID"
              label="학번"
              variant="outlined"
              style={{ width: '80vw', margin: '1vh 0.1vw' }}
            />
            <TextField
              id="name"
              label="이름"
              placeholder="이름을 입력해주세요."
              type="text"
              variant="outlined"
              onChange={onNameHanlder}
              style={{ width: '80vw', margin: '1vh 0.1vw' }}
            />
            <Button
              variant="contained"
              style={{
                width: '80vw',
                height: '6vh',
                backgroundColor: 'rgb(63,81,181)',
                color: 'white',
                border: '1px solid rgb(63,81,181)',
                marginTop: '1vh',
              }}
            >
              회원가입
            </Button>
          </form>
          <MobileDivider />
        </Mobile>
      </Container>
    </CSSTransitionGroup>
  );
};

export default SignUp;
