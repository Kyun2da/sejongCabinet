import React from 'react';
import styled from 'styled-components';
import { TextField, Button, makeStyles } from '@material-ui/core';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import Logo from '../../images/softwareLogo_origin.png';
import media from '../../lib/styles/media';

export type SignUpProps = {};

function SignUp({}: SignUpProps) {
  const classes = useStyles();

  return (
    <Container>
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
          <Button
            // onClick={linktoLogin}
            className={classes.backwards}
          >
            <ArrowBackIosIcon
              style={{
                color: 'lightgray',
              }}
            />
          </Button>
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
    </Container>
  );
}

const useStyles = makeStyles(() => ({
  backwards: {
    opacity: 0.7,
    width: 'auto',
    left: '10%',
    position: 'absolute',

    '&:hover': {
      backgroundColor: 'transparent',
      opacity: 1,
    },

    [`${media.medium.trim()}`]: { left: '0' },
  },
}));

const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: 98vh;
`;

const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  position: absolute;
  top: 3%;

  ${media.medium} {
    width: 75%;
  }
`;

const LogoImg = styled.img`
  width: auto;
  height: 13vh;

  ${media.medium} {
    height: 8vh;
    width: auto;
  }
`;

const LogoTitle = styled.p`
  font-size: 2vh;
  font-weight: bold;
  letter-spacing: 0.5vw;
  margin: 1.5vh 0 0;
  border-bottom: 0.1vh solid black;

  ${media.medium} {
    font-size: 0.8rem;
    margin: 1vh 0 0;
  }
`;

const LogoTitle2 = styled.p`
  font-size: 1.5vh;
  font-weight: bold;
  letter-spacing: 0.4vw;
  margin: 0.15vh 0 2vh;

  ${media.medium} {
    font-size: 0.3rem;
  }
`;

const SignUpForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  border-top: 3px solid lightgray;
  border-bottom: 3px solid lightgray;
  padding: 0vh 5vw 6vh;
  border-radius: 2rem;
  top: 28%;
  position: absolute;
  height: 50vh;
  width: 30vw;

  ${media.medium} {
    width: 75%;
    top: 20%;
    height: 70vh;
    padding: 1vh 1vw;
    border-radius: 1rem;
  }
`;

const SignUpFormHeader = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin: 8vh 0 7vh;
  width: 100%;

  ${media.medium} {
    margin-top: 6vh;
  }
`;

const BackwardsButton = styled.button`
  width: auto;
  left: 10%;
  position: absolute;

  ${media.medium} {
    left: 3%;
  }
`;

const SignUpFormHeaderTitle = styled.p`
  font-size: 2.5rem;
  font-weight: bold;
  letter-spacing: 0.1vw;
  text-align: center;
  position: absolute;

  ${media.medium} {
    font-size: 1.5rem;
  }
`;

export default SignUp;
