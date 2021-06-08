import React, { useCallback, useEffect } from 'react';
import { styled } from '@material-ui/core/styles';
import Logo from '../../images/softwareLogo_origin.png';
import media from '../../lib/styles/media';
import { Button, Container, TextField } from '@material-ui/core';
import { Redirect, useHistory } from 'react-router-dom';
import { Controller, useForm } from 'react-hook-form';
import useSignInWithEmailAndPassword from '../../hooks/useSignInWithEmailAndPassword';
import { auth } from '../../config/firebase.config';
import customSwal from '../../utils/alert';
import getFirebaseErrorMessage from '../../utils/error/firebase';
import { useAppSelector, useUserSelector } from '../../redux/hooks';
import AppLayout from '../../Components/AppLayout';

export type LoginProps = {};

export type LoginInput = {
  studentID: string;
  password: string;
};

function Login({}: LoginProps) {
  const { handleSubmit, control, reset, formState } = useForm<LoginInput>();
  const history = useHistory();
  const { uuid } = useAppSelector(useUserSelector);
  const [signInwithEmailAndPassword, signInAfterUser, loading, error] =
    useSignInWithEmailAndPassword(auth);
  const onSubmit = useCallback(async (data: LoginInput) => {
    await signInwithEmailAndPassword(
      `${data.studentID}@sejongCabinet.com`,
      data.password,
    );
  }, []);

  useEffect(() => {
    if (!error) return;
    customSwal(
      'error',
      '로그인 에러입니다.',
      getFirebaseErrorMessage(error?.code),
    );
  }, [error]);

  useEffect(() => {
    if (formState.isSubmitSuccessful) {
      reset({ studentID: '', password: '' });
    }
  }, [formState, reset]);

  if (uuid) {
    return <Redirect to="/main" />;
  }

  return (
    <AppLayout fadeIn footer>
      <LogoImg src={Logo} alt="logo" />
      <LogoTitle>SEJONG UNIV</LogoTitle>
      <LogoTitle2>소프트웨어학과 사물함</LogoTitle2>
      <LoginForm onSubmit={handleSubmit(onSubmit)}>
        <Controller
          name="studentID"
          control={control}
          defaultValue=""
          rules={{ required: true, minLength: 8, maxLength: 8 }}
          render={({ field: { onChange, value }, fieldState: { error } }) => (
            <LoginTextField
              label="학번"
              variant="outlined"
              onChange={onChange}
              value={value}
              error={!!error}
              helperText={error ? '학번 8자리를 입력해주세요.' : null}
            />
          )}
        />
        <Controller
          name="password"
          control={control}
          defaultValue=""
          rules={{ required: true, minLength: 6 }}
          render={({ field: { onChange, value }, fieldState: { error } }) => (
            <LoginTextField
              label="비밀번호"
              variant="outlined"
              type="password"
              value={value}
              onChange={onChange}
              error={!!error}
              helperText={
                error ? '6글자 이상의 패스워드를 입력해주세요.' : null
              }
            />
          )}
        />
        <LoginButton type="submit" variant="contained">
          로그인
        </LoginButton>
      </LoginForm>
      <SignUpDiv>
        <span>계정이 없으신가요? </span>
        <GoSignUp onClick={() => history.push('/signup')}>가입하기</GoSignUp>
      </SignUpDiv>
    </AppLayout>
  );
}

const LogoImg = styled('img')({
  width: '180px',
  margin: '9vh 0 0',

  [`${media.medium}`]: {
    width: '150px',
  },
});

const LogoTitle = styled('p')({
  fontSize: '2vw',
  fontWeight: 'bold',
  letterSpacing: '1vw',
  borderBottom: '0.1vw solid black',
  margin: '1.5rem 0 0',

  [`${media.medium}`]: {
    fontSize: '5vw',
  },
});

const LogoTitle2 = styled('p')({
  fontSize: '1.2vw',
  fontWeight: 'bolder',
  letterSpacing: '0.8vw',
  margin: '0.3rem 0 2rem',

  [`${media.medium}`]: {
    fontSize: '3vw',
  },
});

const LoginForm = styled('form')({
  justifyContent: 'center',
  flexDirection: 'column',
  display: 'flex',
});

const LoginTextField = styled(TextField)({
  width: '30vw',
  margin: '1vh',

  [`${media.medium}`]: {
    width: '60vw',
  },
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

  [`${media.medium}`]: {
    width: '60vw',
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
  cursor: 'pointer',
});

export default Login;
