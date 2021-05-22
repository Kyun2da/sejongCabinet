import React, { useCallback, useEffect } from 'react';
import { TextField, Button, Container } from '@material-ui/core';
import { styled } from '@material-ui/core/styles';
import { Controller, useForm } from 'react-hook-form';
import { Redirect, useHistory } from 'react-router-dom';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import Logo from '../../images/softwareLogo_origin.png';
import media from '../../lib/styles/media';
import FadeIn from 'react-fade-in';
import { auth, database } from '../../config/firebase.config';
import Swal from 'sweetalert2';
import customSwal from '../../utils/alert';
import getFirebaseErrorMessage from '../../utils/error/firebase';
import useCreateUserWithEmailAndPassword from '../../hooks/useCreateUserWithEmailAndPassword';
import AppLayout from '../../Components/AppLayout';

type SignUpInputs = {
  studentID: string;
  password: string;
  name: string;
};

export type SignUpProps = {};

function SignUp({}: SignUpProps) {
  const { handleSubmit, control, reset, formState, getValues } =
    useForm<SignUpInputs>();

  const onSubmit = useCallback(async (data: SignUpInputs) => {
    await createUserWithEmailAndPassword(
      `${data.studentID}@sejongCabinet.com`,
      data.password,
    );
  }, []);

  const history = useHistory();

  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth);

  const writeUserData = (userID: any, studentID: string, _name: string) => {
    database.ref(`users/${userID}`).set({
      adminType: 0,
      cabinetIdx: 0,
      cabinetTitle: 0,
      name: _name,
      studentID,
    });
  };

  useEffect(() => {
    if (!error) return;
    customSwal(
      'error',
      '회원가입 에러입니다.',
      getFirebaseErrorMessage(error?.code),
    );
  }, [error]);

  useEffect(() => {
    if (formState.isSubmitSuccessful) {
      reset({ studentID: '', password: '', name: '' });
    }
  }, [formState, reset]);

  if (loading) {
    return <div>로딩중...</div>;
  }

  if (user) {
    writeUserData(user.user?.uid, getValues('studentID'), getValues('name'));
    return <Redirect to="/" />;
  }

  return (
    <AppLayout>
      <LogoContainer>
        <LogoImg src={Logo} alt="logo" />
        <LogoTitle>SEJONG UNIV</LogoTitle>
        <LogoTitle2>소프트웨어학과 사물함</LogoTitle2>
      </LogoContainer>
      <SignUpForm
        onSubmit={handleSubmit(onSubmit)}
        noValidate
        name="signUp"
        autoComplete="off"
      >
        <SignUpFormHeader>
          <BackwardsButton onClick={() => history.push('/')}>
            <ArrowBackIosIcon
              style={{
                color: '#C9C9C9',
              }}
            />
          </BackwardsButton>
          <SignUpFormHeaderTitle>회원가입</SignUpFormHeaderTitle>
        </SignUpFormHeader>
        <Controller
          name="studentID"
          control={control}
          defaultValue=""
          rules={{ required: true, minLength: 8, maxLength: 8 }}
          render={({ field: { onChange, value }, fieldState: { error } }) => (
            <SignUpFormTextField
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
            <SignUpFormTextField
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
        <Controller
          name="name"
          control={control}
          defaultValue=""
          rules={{ required: true, minLength: 1 }}
          render={({ field: { onChange, value }, fieldState: { error } }) => (
            <SignUpFormTextField
              label="이름"
              variant="outlined"
              type="text"
              value={value}
              onChange={onChange}
              error={!!error}
              helperText={error ? '이름을 입력해주세요' : null}
            />
          )}
        />
        <SubmitButton variant="contained" type="submit">
          회원가입
        </SubmitButton>
      </SignUpForm>
    </AppLayout>
  );
}

const LogoContainer = styled(Container)({
  display: 'flex',
  alignItems: 'center',
  flexDirection: 'column',
  position: 'absolute',
  top: '3%',
});

const LogoImg = styled('img')({
  width: 'auto',
  height: '13vh',

  [`${media.medium}`]: {
    height: '8vh',
    width: 'auto',
  },
});

const LogoTitle = styled('p')({
  fontSize: '2vh',
  fontWeight: 'bold',
  letterSpacing: '0.5vw',
  margin: '1.5vh 0 0',
  borderBottom: '0.1vh solid black',

  [`${media.medium}`]: {
    fontSize: '0.8rem',
    margin: '1vh 0 0',
  },
});

const LogoTitle2 = styled('p')({
  fontSize: '1.5vh',
  fontWeight: 'bold',
  letterSpacing: '0.4vw',
  margin: '0.15vh 0 2vh',

  [`${media.medium}`]: {
    fontSize: '0.3rem',
  },
});

const SignUpForm = styled('form')({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  borderTop: '3px solid #C9C9C9',
  borderBottom: '3px solid #C9C9C9',
  padding: '0 5vw 6vh',
  borderRadius: '2rem',
  top: '28%',
  position: 'absolute',
  minHeight: '50vh',
  width: '30vw',

  [`${media.medium}`]: {
    width: '75%',
    top: '20%',
    minHeight: '65vh',
    padding: '1vh 1vw 4vh',
    borderRadius: '1rem',
    borderTop: '2px solid #C9C9C9',
    borderBottom: '2px solid #C9C9C9',
    marginTop: '2vh',
  },
});

const SignUpFormHeader = styled(Container)({
  display: 'flex',
  alignItems: 'center',
  flexDirection: 'row',
  justifyContent: 'center',
  margin: '8vh 0 7vh',
  width: '100%',

  [`${media.medium}`]: {
    marginTop: '6vh',
  },
});

const BackwardsButton = styled(Button)({
  opacity: '0.7',
  width: 'auto',
  left: '10%',
  position: 'absolute',

  '&:hover': {
    opacity: '1',
    backgroundColor: 'transparent',
  },

  [`${media.medium}`]: { left: '0' },
});

const SignUpFormHeaderTitle = styled('p')({
  fontSize: '2.6rem',
  fontWeight: 'bold',
  letterSpacing: '0.1vw',
  textAlign: 'center',
  position: 'absolute',
  color: '#1A1A1A',

  [`${media.medium}`]: {
    fontSize: '1.5rem',
  },
});

const SignUpFormTextField = styled(TextField)({
  width: '30vw',
  margin: '1.5vh 0',

  [`${media.medium}`]: {
    width: '70vw',
    margin: '2vh 0',
  },
});

const SubmitButton = styled(Button)({
  width: '30vw',
  height: '6vh',
  backgroundColor: 'rgb(63,81,181)',
  color: 'white',
  border: '1px solid rgb(63,81,181)',
  marginTop: '1vh',

  '&:hover': {
    backgroundColor: '#2036b1',
  },

  [`${media.medium}`]: {
    width: '70vw',
  },
});

export default SignUp;
