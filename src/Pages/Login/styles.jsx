import { styled as mstyled } from '@material-ui/core/styles';
import styled from 'styled-components';
import { Button, TextField, Typography } from '@material-ui/core';

export const LoginContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100%;
`;

export const LogoImg = styled.img`
  width: 9.5vw;
  margin: 9vh 0 0;
`;

export const MainTitle = mstyled(Typography)({
  fontSize: '2vw',
  fontWeight: 'bold',
  letterSpacing: '1vw',
  borderBottom: '0.1vw solid black',
  margin: '1.5rem 0 0',
});

export const LoginForm = styled.form`
  justify-content: center;
  flex-direction: column;
  display: flex;
`;

export const SubTitle = mstyled(Typography)({
  fontSize: '1.2vw',
  fontWeight: 'bolder',
  letterSpacing: '0.8vw',
  margin: '0.3rem 0 2rem',
});

export const LoginButton = mstyled(Button)({
  width: '30vw',
  height: '5vh',
  color: 'white',
  margin: '1vh',
});

export const LoginTextField = mstyled(TextField)({
  width: '30vw',
  margin: '1vh',
});

export const GoSignUpButton = mstyled(Button)({
  color: '#0500FF',
  backgroundColor: 'transparent',
  fontSize: '1rem',
});
