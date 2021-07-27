import React, { useCallback, useEffect } from 'react';
import {
  TextField,
  Button,
  Container,
  CircularProgress,
} from '@material-ui/core';
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
import { useMediaQuery } from 'react-responsive';

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

  const isMobileAndTablet = useMediaQuery({
    query: '(max-width:1023px)',
  });

  const history = useHistory();

  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth);

  const writeUserData = (userID: any, _studentID: string, _name: string) => {
    database.ref(`users/${userID}`).set({
      adminType: 0,
      cabinetIdx: null,
      cabinetTitle: '',
      name: _name,
      studentID: _studentID,
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
    return (
      <AppLayout>
        <CircularProgress size="50vw" />
      </AppLayout>
    );
  }

  if (user) {
    writeUserData(user.user?.uid, getValues('studentID'), getValues('name'));
    return <Redirect to="/" />;
  }

  return (
    <AppLayout fadeIn footer>
      <LogoContainer>
        <LogoImg src={Logo} alt="logo" />
        {!isMobileAndTablet ? (
          <>
            <LogoTitle>SEJONG UNIV</LogoTitle>
            <LogoTitle2>소프트웨어학과 사물함</LogoTitle2>
          </>
        ) : null}
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

  marginTop: '2rem',
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
    fontSize: '0.9rem',
    fontWeight: 'bold',
    letterSpacing: '0.5vw',
    borderBottom: '0.1vw solid black',
    margin: '0.7rem 0 0',
  },
});

const LogoTitle2 = styled('p')({
  fontSize: '1.5vh',
  fontWeight: 'bold',
  letterSpacing: '0.4vw',
  margin: '0.15vh 0 2vh',

  [`${media.medium}`]: {
    fontSize: '0.7rem',
    fontWeight: 'bolder',
    letterSpacing: '0.4vw',
    margin: '0.15rem 0 0',
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
  position: 'static',
  minHeight: '50vh',
  width: '30vw',
  marginTop: '4vh',

  [`${media.medium}`]: {
    width: '80%',
    marginTop: '6vh',
    height: '60%',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.3)',
    border: 'none',
  },
});

const SignUpFormHeader = styled(Container)({
  display: 'flex',
  position: 'relative',
  alignItems: 'center',
  flexDirection: 'row',
  justifyContent: 'center',
  margin: '8vh 0 7vh',
  width: '100%',

  [`${media.medium}`]: {
    margin: '3vh 0',
    height: '8vh',
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

const SignUpFormHeaderTitle = styled('div')({
  fontSize: '2.5rem',
  fontWeight: 'bold',
  letterSpacing: '0.1vw',
  textAlign: 'center',
  position: 'absolute',
  color: '#1A1A1A',

  [`${media.medium}`]: {
    fontSize: '1.8rem',
  },
});

const SignUpFormTextField = styled(TextField)({
  width: '30vw',
  margin: '1.5vh 0',

  [`${media.medium}`]: {
    width: '100%',
    margin: '1vh 0',
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
    width: '100%',
    minHeight: '7vh',
  },
});

export default SignUp;
