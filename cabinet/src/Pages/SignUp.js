import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';
import { CSSTransitionGroup } from 'react-transition-group';
import { TextField, Button } from '@material-ui/core';
import Logo from '../image/Logo.png';
import { Mobile, Default } from '../MediaQuery';
import './Fadeout.css';

const Container = styled.div`
  display: flex;
  justify-contents: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: 98vh;
`;

const MobileDivider = styled.div`
  border-bottom: 2px solid lightgray;
  width: 85%;
  margin: 5vh 1vw;
`;

const SignUp = () => {
  const history = useHistory();
  const [_id, setId] = useState('');
  const [_password, setPassword] = useState('');
  const [_studentId, setStudentId] = useState('');

  const onIdHandler = (e) => {
    console.log(e.currentTarget.value);
    setId(e.currentTarget.value);
  };
  const onPasswordHanlder = (e) => {
    console.log(e.currentTarget.value);
    setPassword(e.currentTarget.value);
  };
  const onStudentIdHanlder = (e) => {
    console.log(e.currentTarget.value);
    setStudentId(e.currentTarget.value);
  };
  const SignUpSubmit = (e) => {
    e.preventdefault();
    history.push('/');
  };

  const click = () => {
    history.push('/main');
  };
  const click2 = () => {
    history.push('/');
  };

  return (
    <CSSTransitionGroup
      transitionName="homeTransition"
      transitionAppear="true"
      transitionAppearTimeout={500}
      transitionEnter={false}
      transitionLeave={false}
    >
      <Container>
        <Default>
          <img
            src={Logo}
            alt="logo"
            width="90vw"
            style={{ margin: '3vh 0 0 ' }}
          />

          <p
            style={{
              fontSize: '1vw',
              fontWeight: 'bold',
              letterSpacing: '0.5vw',
              borderBottom: '0.1vw solid black',
              margin: '0.7rem 0 0',
            }}
          >
            SEJONG UNIV
          </p>
          <p
            style={{
              fontSize: '0.8vw',
              fontWeight: 'bolder',
              letterSpacing: '0.4vw',
              margin: '0.15rem 0 3rem',
            }}
          >
            소프트웨어학과 사물함
          </p>
          <form
            noValidate
            autoComplete="off"
            onSubmit={SignUpSubmit}
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              flexDirection: 'column',
              display: 'flex',
              borderTop: '3px solid lightgray',
              borderBottom: '3px solid lightgray',
              padding: '3vh 5vw 10vh',
              borderRadius: '2rem',
            }}
          >
            <div style={{ display: 'flex' }}>
              <p
                style={{
                  fontSize: '2.5rem',
                  fontWeight: 'bold',
                  letterSpacing: '1vw',
                  marginTop: '1vh',
                }}
              >
                회원가입
              </p>
            </div>
            <TextField
              id="id"
              label="ID"
              variant="outlined"
              onChange={onIdHandler}
              style={{ width: '30vw', margin: '1.5vh' }}
            />
            <TextField
              id="password"
              label="Password"
              variant="outlined"
              onChange={onPasswordHanlder}
              style={{ width: '30vw', margin: '1.5vh' }}
            />
            <TextField
              id="studentID"
              label="학번"
              variant="outlined"
              onChange={onStudentIdHanlder}
              style={{ width: '30vw', margin: '1.5vh' }}
            />
            <Button
              variant="contained"
              type="submit"
              style={{
                width: '30vw',
                height: '5vh',
                backgroundColor: 'rgb(195,0,47)',
                color: 'white',
                border: '1px solid rgb(195,0,47)',
                marginTop: '1vh',
              }}
            >
              회원가입
            </Button>
          </form>
        </Default>

        <Mobile style={{ textalign: 'center' }}>
          <img
            src={Logo}
            alt="logo"
            width="60vw"
            style={{ margin: '8vh 0 0 ' }}
          />
          <p
            style={{
              fontSize: '2vh',
              fontWeight: 'bold',
              letterSpacing: '2vw',
              borderBottom: '1px solid black',
              margin: '0.8rem 0 0',
            }}
          >
            SEJONG UNIV
          </p>
          <p
            style={{
              fontSize: '1.8vh',
              fontWeight: 'bolder',
              letterSpacing: '0.7vw',
              margin: '0.3rem 0 1rem',
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
            <p
              style={{
                fontSize: '4vh',
                fontWeight: 'bold',
                display: 'flex',
                justifyContent: 'center',
                paddingBottom: '1rem',
                borderBottom: '2px solid lightgray',
              }}
            >
              회원가입
            </p>
            <TextField
              id="id"
              label="ID"
              variant="outlined"
              style={{ width: '80vw', margin: '1.5vh 0.1vw' }}
            />
            <TextField
              id="password"
              label="Password"
              variant="outlined"
              style={{ width: '80vw', margin: '1.5vh 0.1vw' }}
            />
            <TextField
              id="studentID"
              label="학번"
              variant="outlined"
              style={{ width: '80vw', margin: '1.5vh 0.1vw' }}
            />
          </form>
          <Button
            variant="contained"
            style={{
              width: '80vw',
              height: '5vh',
              backgroundColor: 'rgb(195,0,47)',
              color: 'white',
              border: '1px solid rgb(195,0,47)',
              marginTop: '1vh',
            }}
          >
            회원가입
          </Button>
          <MobileDivider />
        </Mobile>
      </Container>
    </CSSTransitionGroup>
  );
};

export default SignUp;
