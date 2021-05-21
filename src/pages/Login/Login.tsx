import React from 'react';
import { styled } from '@material-ui/core/styles';
import Logo from '../../images/softwareLogo_origin.png';
import media from '../../lib/styles/media';
import { Button, Container, TextField } from '@material-ui/core';
import { Redirect, useHistory } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import FadeIn from 'react-fade-in';
import useSignInWithEmailAndPassword from '../../hooks/useSignInWithEmailAndPassword';
import { auth } from '../../config/firebase.config';
import Swal from 'sweetalert2';
import customSwal from '../../utils/alert';
import getFirebaseErrorMessage from '../../utils/error/firebase';
import { useAppDispatch } from '../../redux/hooks';
import { setUserUID } from '../../redux/user/userSlice';

export type LoginProps = {};

export type LoginInput = {
  studentID: string;
  password: string;
};

function Login({}: LoginProps) {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<LoginInput>();

  const onSubmit = async (data: LoginInput) => {
    await signInwithEmailAndPassword(
      `${data.studentID}@sejongCabinet.com`,
      data.password,
    );
    console.log(user);
  };
  const history = useHistory();

  const [signInwithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);

  const dispatch = useAppDispatch();

  const saveUserInfo = (uid: string | undefined) => {
    dispatch(setUserUID(uid));
  };

  if (error) {
    customSwal(
      'error',
      '로그인 에러입니다.',
      getFirebaseErrorMessage(error.code),
    );
  }

  if (loading) {
    return <div>로딩중...</div>;
  }

  if (user) {
    saveUserInfo(user.user?.uid);
    return <Redirect to="/main" />;
  }

  return (
    <FadeIn delay={0} transitionDuration={500}>
      <LoginContainer>
        <LogoImg src={Logo} alt="logo" />
        <LogoTitle>SEJONG UNIV</LogoTitle>
        <LogoTitle2>소프트웨어학과 사물함</LogoTitle2>
        <LoginForm onSubmit={handleSubmit(onSubmit)}>
          <LoginTextField
            label="학번"
            variant="outlined"
            {...register('studentID', {
              required: true,
              minLength: 8,
              maxLength: 8,
            })}
            inputProps={{ maxLength: 8 }}
            helperText={errors.studentID && '학번 8자리를 입력해주세요.'}
          />
          <LoginTextField
            label="비밀번호"
            variant="outlined"
            type="password"
            {...register('password', { required: true, minLength: 6 })}
            inputProps={{ maxLength: 12 }}
            helperText={
              errors.password && '6글자 이상의 패스워드를 입력해주세요.'
            }
          />
          <LoginButton type="submit" variant="contained">
            로그인
          </LoginButton>
        </LoginForm>
        <SignUpDiv>
          <span>계정이 없으신가요? </span>
          <GoSignUp onClick={() => history.push('/signup')}>가입하기</GoSignUp>
        </SignUpDiv>
      </LoginContainer>
    </FadeIn>
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
});

export default Login;
