import React from 'react';
import { TextField, Button, Container } from '@material-ui/core';
import { styled } from '@material-ui/core/styles';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import Logo from '../../images/softwareLogo_origin.png';
import media from '../../lib/styles/media';

export type SignUpProps = {};

function SignUp({}: SignUpProps) {
  return (
    <SignUpContainer>
      <LogoContainer>
        <LogoImg src={Logo} alt="logo" />
        <LogoTitle>SEJONG UNIV</LogoTitle>
        <LogoTitle2>소프트웨어학과 사물함</LogoTitle2>
      </LogoContainer>
      <SignUpForm
        // onSubmit={SignUpSubmit}
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
                color: 'lightgray',
              }}
            />
          </BackwardsButton>
          <SignUpFormHeaderTitle>회원가입</SignUpFormHeaderTitle>
        </SignUpFormHeader>
        <TextField
          id="studentID"
          label="학번"
          type="text"
          variant="outlined"
          // error={touched[0] && studentID.length !== 8}
          // helperText={touched[0] && '학번 8자리를 입력해주세요.'}
          // onChange={onStudentIdHandler}
          // onFocus={handleTouch(0)}
          style={{ width: '30vw', margin: '1.5vh' }}
        />
        <TextField
          id="password"
          label="비밀번호"
          type="password"
          variant="outlined"
          // error={touched[1] && password.length < 6}
          // onChange={onPasswordHandler}
          // onFocus={handleTouch(1)}
          // helperText={touched[1] && '6글자 이상의 패스워드를 입력해주세요.'}
          style={{ width: '30vw', margin: '1.5vh' }}
        />
        <TextField
          id="name"
          label="이름"
          placeholder="이름을 입력해주세요."
          type="text"
          variant="outlined"
          // error={touched[3] && name.length <= 0}
          // helperText={touched[3] && '이름을 한 글자 이상 입력해주세요.'}
          // onFocus={handleTouch(3)}
          // onChange={onNameHandler}
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

  [`${media.medium.trim()}`]: {
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

  [`${media.medium.trim()}`]: {
    fontSize: '0.8rem',
    margin: '1vh 0 0',
  },
});

const LogoTitle2 = styled('p')({
  fontSize: '1.5vh',
  fontWeight: 'bold',
  letterSpacing: '0.4vw',
  margin: '0.15vh 0 2vh',

  [`${media.medium.trim()}`]: {
    fontSize: '0.3rem',
  },
});

const SignUpForm = styled('form')({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  borderTop: '3px solid lightgray',
  borderBottom: '3px solid lightgray',
  padding: '0 5vw 6vh',
  borderRadius: '2rem',
  top: '28%',
  position: 'absolute',
  height: '50vh',
  width: '30vw',

  [`${media.medium.trim()}`]: {
    width: '75%',
    top: '20%',
    height: '60vh',
    padding: '1vh 1vw',
    borderRadius: '1rem',
  },
});

const SignUpFormHeader = styled(Container)({
  display: 'flex',
  alignItems: 'center',
  flexDirection: 'row',
  justifyContent: 'center',
  margin: '8vh 0 7vh',
  width: '100%',

  [`${media.medium.trim()}`]: {
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

  [`${media.medium.trim()}`]: { left: '0' },
});

const SignUpFormHeaderTitle = styled('p')({
  fontSize: '2.5rem',
  fontWeight: 'bold',
  letterSpacing: '0.1vw',
  textAlign: 'center',
  position: 'absolute',

  [`${media.medium.trim()}`]: {
    fontSize: '1.5rem',
  },
});

export default SignUp;
