import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { CSSTransitionGroup } from 'react-transition-group';
import { TextField, Button } from '@material-ui/core';
import Logo from '../image/softwareLogo_origin.png';
import '../Pages/Fadeout.css';
import { Mobile, Default } from '../MediaQuery';

const Container = styled.div`
  display: flex;
  justify-contents: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
`;

const LoginMobile = (props) => {
  const { LoginSubmit, onIdHandler, onPasswordHanlder, toSignUp } = props;
  return (
    <Container>
      <img
        src={Logo}
        alt="logo"
        width="150vw"
        style={{ margin: '10vh 0 0 ' }}
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
          type="password"
          variant="outlined"
          onChange={onPasswordHanlder}
          style={{ width: '80vw', margin: '1vh 0' }}
        />
        <Button
          variant="contained"
          type="submit"
          style={{
            width: '80vw',
            height: '3.5rem',
            backgroundColor: 'rgb(63,81,181)',
            color: 'white',
            border: '1px solid rgb(63,81,181)',
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
    </Container>
  );
};

LoginMobile.propTypes = {
  LoginSubmit: PropTypes.func.isRequired,
  onIdHandler: PropTypes.func.isRequired,
  onPasswordHanlder: PropTypes.func.isRequired,
  toSignUp: PropTypes.func.isRequired,
};

export default LoginMobile;
