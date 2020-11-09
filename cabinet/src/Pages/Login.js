import React from 'react';
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
  const w = window.outerWidth;
  const h = window.outerHeight;
  const history = useHistory();
  const click = () => {
    history.push('/main');
  };
  const click2 = () => {
    history.push('/signup');
  };

  return (
    <Container>
      <Default>
        <img
          src={Logo}
          alt="logo"
          width={(w + h) / 12}
          style={{ margin: '8rem 0 0 ' }}
        />
      </Default>
      <Mobile>
        <img
          src={Logo}
          alt="logo"
          width={(w + h) / 6}
          style={{ margin: '6rem 0 0 ' }}
        />
      </Mobile>

      <p
        style={{
          fontSize: '2rem',
          letterSpacing: '1rem',
          borderBottom: '1px solid black',
          margin: '0.8rem 0 0',
        }}
      >
        SEJONG UNIV
      </p>
      <p
        style={{
          fontSize: '1.2rem',
          letterSpacing: '0.8rem',
          margin: '0.3rem 0 2rem',
        }}
      >
        소프트웨어학과 사물함
      </p>
      <form
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
          style={{ width: '30rem', margin: '0.5rem' }}
        />
        <TextField
          id="password"
          label="Password"
          variant="outlined"
          style={{ width: '30rem', margin: '0.5rem' }}
        />
      </form>
      <Button
        variant="contained"
        style={{
          width: '30rem',
          backgroundColor: 'rgb(195,0,47)',
          color: 'white',
          border: '1px solid rgb(195,0,47)',
        }}
      >
        로그인
      </Button>
      <div style={{ display: 'inline-block', margin: '1rem 0 0' }}>
        계정이 없으신가요?
        <Button
          onClick={click2}
          style={{
            color: '#0500FF',
            backgroundColor: 'transparent',
            fontSize: '1rem',
          }}
        >
          가입하기
        </Button>
      </div>
    </Container>
  );
};

export default Login;
