import React, { useState } from 'react';
import styled from 'styled-components';
import { CSSTransitionGroup } from 'react-transition-group';
import { TextField, Button, makeStyles, Img } from '@material-ui/core';
import PropTypes from 'prop-types';
import Logo from '../image/softwareLogo_origin.png';
import { Mobile, Default } from '../MediaQuery';
import '../Pages/Fadeout.css';
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

const validateEmail = (email) => {
  const re = /\S+@\S+\.\S+/;
  return re.test(email);
};

const SignUpMobile = (props) => {
  const {
    SignUpSubmit,
    linktoLogin,
    onEmailHandler,
    onPasswordHandler,
    onStudentIdHandler,
    onNameHandler,
    email,
    password,
    studentID,
    name,
  } = props;
  const classes = useStyles();
  const [touched, setTouched] = useState([false, false, false, false]);
  const handleTouch = (i) => () => {
    const arr = Array(4).fill(false);
    arr[i] = true;
    setTouched(arr);
  };
  return (
    <CSSTransitionGroup
      transitionName="homeTransition"
      transitionAppear
      transitionAppearTimeout={500}
      transitionEnter={false}
      transitionLeave={false}
    >
      <Container>
        <img src={Logo} alt="logo" width="80vw" style={{ margin: '2vh 0 0' }} />
        <p
          style={{
            fontSize: '1rem',
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
            fontSize: '0.8rem',
            fontWeight: 'bolder',
            letterSpacing: '0.4vw',
            margin: '0.15rem 0 0',
          }}
        >
          소프트웨어학과 사물함
        </p>

        <form
          onSubmit={SignUpSubmit}
          name="signUp"
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
            id="studentID"
            label="학번"
            type="text"
            variant="outlined"
            error={touched[0] && studentID.length !== 8}
            helperText={touched[0] && '학번 8자리를 입력해주세요.'}
            onChange={onStudentIdHandler}
            onFocus={handleTouch(0)}
            style={{ width: '80vw', margin: '1vh 0.1vw' }}
          />
          <TextField
            id="password"
            label="Password"
            type="password"
            variant="outlined"
            error={touched[1] && password.length < 6}
            onChange={onPasswordHandler}
            onFocus={handleTouch(1)}
            helperText={touched[1] && '6글자 이상의 패스워드를 입력해주세요.'}
            style={{ width: '80vw', margin: '1vh 0.1vw' }}
          />
          <TextField
            id="id"
            label="Email"
            helperText={
              touched[2] && 'aaa@domain.com 형식의 이메일 주소를 입력해주세요.'
            }
            type="email"
            variant="outlined"
            error={touched[2] && !validateEmail(email)}
            onFocus={handleTouch(2)}
            onChange={onEmailHandler}
            style={{ width: '80vw', margin: '1vh 0.1vw' }}
          />
          <TextField
            id="name"
            label="이름"
            placeholder="이름을 입력해주세요."
            type="text"
            variant="outlined"
            error={touched[3] && name.length <= 0}
            helperText={touched[3] && '이름을 한 글자 이상 입력해주세요.'}
            onFocus={handleTouch(3)}
            onChange={onNameHandler}
            style={{ width: '80vw', margin: '1vh 0.1vw' }}
          />
          <Button
            variant="contained"
            type="submit"
            style={{
              width: '80vw',
              height: '2.5rem',
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
      </Container>
    </CSSTransitionGroup>
  );
};

SignUpMobile.propTypes = {
  SignUpSubmit: PropTypes.func.isRequired,
  linktoLogin: PropTypes.func.isRequired,
  onEmailHandler: PropTypes.func.isRequired,
  onPasswordHandler: PropTypes.func.isRequired,
  onStudentIdHandler: PropTypes.func.isRequired,
  onNameHandler: PropTypes.func.isRequired,
  email: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  studentID: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

export default SignUpMobile;
