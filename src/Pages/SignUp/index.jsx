import React, { useState } from 'react';
import { TransitionGroup } from 'react-transition-group';
import PropTypes from 'prop-types';
import Logo from '../../image/softwareLogo_origin.png';
import { Default } from '../../MediaQuery';
import '../Fadeout.css';
import backwards from '../../image/Backward.png';
import {
  SignUpContainer,
  useStyles,
  LogoMainTitle,
  LogoSubTitle,
  SignUpButton,
  GoLoginButton,
  SignUpTitle,
  SignUpTextField,
  SignUpHeader,
} from './styles';

const SignUp = (props) => {
  const {
    SignUpSubmit,
    linktoLogin,
    onPasswordHandler,
    onStudentIdHandler,
    onNameHandler,
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
    <TransitionGroup>
      <SignUpContainer>
        <Default>
          <img
            src={Logo}
            alt="logo"
            width="80vw"
            style={{ margin: '1vh 0 0 ' }}
          />
          <LogoMainTitle>SEJONG UNIV</LogoMainTitle>
          <LogoSubTitle>소프트웨어학과 사물함</LogoSubTitle>
          <form
            onSubmit={SignUpSubmit}
            noValidate
            name="signUp"
            autoComplete="off"
            className={classes.signUpForm}
          >
            <SignUpHeader>
              <GoLoginButton
                onClick={linktoLogin}
                className={classes.backwards}
              >
                <img
                  src={backwards}
                  alt="toLogin"
                  width="20rem"
                  style={{ margin: '2vh 1vw auto 0' }}
                />
              </GoLoginButton>
              <div style={{ width: '100%' }}>
                <SignUpTitle>회원가입</SignUpTitle>
              </div>
            </SignUpHeader>
            <SignUpTextField
              id="studentID"
              label="학번"
              type="text"
              variant="outlined"
              error={touched[0] && studentID.length !== 8}
              helperText={touched[0] && '학번 8자리를 입력해주세요.'}
              onChange={onStudentIdHandler}
              onFocus={handleTouch(0)}
            />
            <SignUpTextField
              id="password"
              label="비밀번호"
              type="password"
              variant="outlined"
              error={touched[1] && password.length < 6}
              onChange={onPasswordHandler}
              onFocus={handleTouch(1)}
              helperText={touched[1] && '6글자 이상의 패스워드를 입력해주세요.'}
            />
            <SignUpTextField
              id="name"
              label="이름"
              placeholder="이름을 입력해주세요."
              type="text"
              variant="outlined"
              error={touched[3] && name.length <= 0}
              helperText={touched[3] && '이름을 한 글자 이상 입력해주세요.'}
              onFocus={handleTouch(3)}
              onChange={onNameHandler}
            />
            <SignUpButton variant="contained" type="submit">
              회원가입
            </SignUpButton>
          </form>
        </Default>
      </SignUpContainer>
    </TransitionGroup>
  );
};

SignUp.propTypes = {
  SignUpSubmit: PropTypes.func.isRequired,
  linktoLogin: PropTypes.func.isRequired,
  onPasswordHandler: PropTypes.func.isRequired,
  onStudentIdHandler: PropTypes.func.isRequired,
  onNameHandler: PropTypes.func.isRequired,
  password: PropTypes.string.isRequired,
  studentID: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

export default React.memo(SignUp);
