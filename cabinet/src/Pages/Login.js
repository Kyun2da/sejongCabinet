import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';
import { TextField, Button } from '@material-ui/core';
import Logo from '../image/Logo.png';
import { Mobile, Default } from '../MediaQuery';

const Container = styled.div`
  display: flex;
  justify-contents: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
`;

const Login = () => {
  const history = useHistory();
  const [_id, setId] = useState('');
  const [_password, setPassword] = useState('');
  const onIdHandler = (e) => {
    console.log(e.currentTarget.value);
    setId(e.currentTarget.value);
  };
  const onPasswordHanlder = (e) => {
    console.log(e.currentTarget.value);
    setPassword(e.currentTarget.value);
  };

  const LoginSubmit = (e) => {
    console.log('login clicked!');
    e.preventDefault();
    history.push('/main');
  };
  const toMainPage = () => {
    history.push('/main');
  };
  const toSignUp = () => {
    history.push('/signup');
  };

  return (
    <Container>
      <Default>
        <img
          src={Logo}
          alt="logo"
          width="180vw"
          style={{ margin: '12vh 0 0 ' }}
        />

        <p
          style={{
            fontSize: '2vw',
            fontWeight: 'bold',
            letterSpacing: '1vw',
            borderBottom: '0.1vw solid black',
            margin: '1.5rem 0 0',
          }}
        >
          SEJONG UNIV
        </p>
        <p
          style={{
            fontSize: '1.2vw',
            fontWeight: 'bolder',
            letterSpacing: '0.8vw',
            margin: '0.3rem 0 2rem',
          }}
        >
          소프트웨어학과 사물함
        </p>
        <form
          onSubmit={LoginSubmit}
          name="login"
          noValidate
          autoComplete="off"
          style={{
            justifyContent: 'center',
            flexDirection: 'column',
            display: 'flex',
          }}
        >
          <TextField
            id="id"
            label="ID"
            variant="outlined"
            onChange={onIdHandler}
            style={{ width: '30vw', margin: '1vh' }}
          />
          <TextField
            id="password"
            label="Password"
            variant="outlined"
            onChange={onPasswordHanlder}
            style={{ width: '30vw', margin: '1vh' }}
          />
          <Button
            type="submit"
            variant="contained"
            style={{
              width: '30vw',
              height: '5vh',
              backgroundColor: 'rgb(195,0,47)',
              color: 'white',
              border: '1px solid rgb(195,0,47)',
              margin: '1vh',
            }}
          >
            로그인
          </Button>
        </form>
        <div style={{ display: 'inline-block', margin: '2vh 0 0' }}>
          계정이 없으신가요?
          <Button
            onClick={toSignUp}
            style={{
              color: '#0500FF',
              backgroundColor: 'transparent',
              fontSize: '1rem',
            }}
          >
            가입하기
          </Button>
        </div>
      </Default>

      <Mobile style={{ textalign: 'center' }}>
        <img
          src={Logo}
          alt="logo"
          width="100vw"
          style={{ margin: '12vh 0 0 ' }}
        />
        <p
          style={{
            fontSize: '3vh',
            fontWeight: 'bold',
            letterSpacing: '3vw',
            borderBottom: '2px solid black',
            margin: '1.5rem 0 0',
          }}
        >
          SEJONG UNIV
        </p>
        <p
          style={{
            fontSize: '2vh',
            fontWeight: 'bolder',
            letterSpacing: '2vw',
            margin: '0.3rem 0 2rem',
          }}
        >
          소프트웨어학과 사물함
        </p>
        <form
          noValidate
          autoComplete="off"
          onSubmit={LoginSubmit}
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'column',
            display: 'flex',
          }}
        >
          <TextField
            id="id"
            label="ID"
            variant="outlined"
            onChange={onIdHandler}
            style={{ width: '80vw', margin: '1vh 0' }}
          />
          <TextField
            id="password"
            label="Password"
            variant="outlined"
            onChange={onPasswordHanlder}
            style={{ width: '80vw', margin: '1vh 0' }}
          />
          <Button
            variant="contained"
            type="submit"
            style={{
              width: '80vw',
              height: '5vh',
              backgroundColor: 'rgb(195,0,47)',
              color: 'white',
              border: '1px solid rgb(195,0,47)',
              margin: '1vh',
            }}
          >
            로그인
          </Button>
        </form>
        <div
          style={{
            display: 'inline-block',
            margin: '1rem 0 0',
          }}
        >
          계정이 없으신가요?
          <Button
            onClick={toSignUp}
            style={{
              color: '#0500FF',
              backgroundColor: 'transparent',
              fontSize: '1rem',
            }}
          >
            가입하기
          </Button>
        </div>
      </Mobile>
    </Container>
  );
};

export default Login;
