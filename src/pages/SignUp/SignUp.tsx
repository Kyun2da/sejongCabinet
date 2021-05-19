import React from 'react';
import { TextField, Button, Container } from '@material-ui/core';
import { styled } from '@material-ui/core/styles';
import { useForm, SubmitHandler } from 'react-hook-form';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import Logo from '../../images/softwareLogo_origin.png';
import media from '../../lib/styles/media';

type SignUpInputs = {
  studentID: number;
  password: string;
  name: string;
};

export type SignUpProps = {};

function SignUp({}: SignUpProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignUpInputs>();
  const onSubmit: SubmitHandler<SignUpInputs> = (data) => console.log(data);

  return (
    <SignUpContainer>
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
          <BackwardsButton
          // onClick={linktoLogin}
          >
            <ArrowBackIosIcon
              style={{
                color: '#C9C9C9',
              }}
            />
          </BackwardsButton>
          <SignUpFormHeaderTitle>회원가입</SignUpFormHeaderTitle>
        </SignUpFormHeader>
        <SignUpFormTextField
          label="학번"
          type="tel"
          variant="outlined"
          {...register('studentID', {
            required: true,
            minLength: 8,
            maxLength: 8,
          })}
          inputProps={{ maxLength: 8 }}
          helperText={errors.studentID && '학번 8자리를 입력해주세요.'}
        />
        <SignUpFormTextField
          label="비밀번호"
          type="password"
          variant="outlined"
          {...register('password', { required: true, minLength: 6 })}
          inputProps={{ maxLength: 12 }}
          helperText={
            errors.password && '6글자 이상의 패스워드를 입력해주세요.'
          }
        />
        <SignUpFormTextField
          label="이름"
          type="text"
          variant="outlined"
          {...register('name', { required: true, minLength: 1 })}
          inputProps={{ maxLength: 8 }}
          helperText={errors.name && '이름을 한 글자 이상 입력해주세요.'}
        />
        <SubmitButton variant="contained" type="submit">
          회원가입
        </SubmitButton>
      </SignUpForm>
    </SignUpContainer>
  );
}

const SignUpContainer = styled(Container)({
  display: 'flex',
  alignItems: 'center',
  flexDirection: 'column',
  width: '100%',
  height: '100vh',
});

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
    backgroundColor: 'rgb(63,81,181)',
  },

  [`${media.medium}`]: {
    width: '70vw',
  },
});

export default SignUp;
