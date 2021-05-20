import React from 'react';
import { styled } from '@material-ui/core/styles';
import Logo from '../../images/softwareLogo_origin.png';
import media from '../../lib/styles/media';
import { Button, Container, TextField } from '@material-ui/core';

export type LoginProps = {};

function Login({}: LoginProps) {
  return (
    <LoginContainer>
      <LogoImg src={Logo} alt="logo" />
      <LogoTitle>SEJONG UNIV</LogoTitle>
      <LogoTitle2>소프트웨어학과 사물함</LogoTitle2>
      <LoginForm>
        <LoginTextField label="학번" variant="outlined" />
        <LoginTextField label="비밀번호" variant="outlined" type="password" />
        <LoginButton type="submit" variant="contained">
          로그인
        </LoginButton>
      </LoginForm>
      <SignUpDiv>
        <span>계정이 없으신가요? </span>
        <GoSignUp href="/signup">가입하기</GoSignUp>
      </SignUpDiv>
    </LoginContainer>
  );
}

const LoginContainer = styled(Container)({
  display: 'flex',
  alignItems: 'center',
  flexDirection: 'column',
  width: '100%',
  height: '98vh',
});

const LogoImg = styled('img')({
  width: '180px',
  margin: '9vh 0 0',
});

const LogoTitle = styled('p')({
  fontSize: '2vw',
  fontWeight: 'bold',
  letterSpacing: '1vw',
  borderBottom: '0.1vw solid black',
  margin: '1.5rem 0 0',
});

const LogoTitle2 = styled('p')({
  fontSize: '1.2vw',
  fontWeight: 'bolder',
  letterSpacing: '0.8vw',
  margin: '0.3rem 0 2rem',
});

const LoginForm = styled('form')({
  justifyContent: 'center',
  flexDirection: 'column',
  display: 'flex',
});

const LoginTextField = styled(TextField)({
  width: '30vw',
  margin: '1vh',
});

const LoginButton = styled(Button)({
  width: '30vw',
  height: '5vh',
  backgroundColor: 'rgb(63,81,181)',
  color: 'white',
  border: '1px solid rgb(63,81,181)',
  margin: '1vh',

  '&:hover': {
    backgroundColor: '#2036b1',
  },
});

const SignUpDiv = styled(Container)({
  textAlign: 'center',
  margin: '2vh 0 0',
});

const GoSignUp = styled('a')({
  color: '#0500FF',
  backgroundColor: 'transparent',
  fontSize: '1rem',
  margin: '0 0 0 4px',
  textDecoration: 'none',
});

export default Login;
