import { styled } from '@material-ui/core/styles';
import { Button, Container, TextField, Typography } from '@material-ui/core';

export const LoginContainer = styled(Container)({
  display: 'flex',
  alignItems: 'center',
  flexDirection: 'column',
  width: '100%',
});

export const MainTitle = styled(Typography)({
  fontSize: '2vw',
  fontWeight: 'bold',
  letterSpacing: '1vw',
  borderBottom: '0.1vw solid black',
  margin: '1.5rem 0 0',
});

export const SubTitle = styled(Typography)({
  fontSize: '1.2vw',
  fontWeight: 'bolder',
  letterSpacing: '0.8vw',
  margin: '0.3rem 0 2rem',
});

export const LoginButton = styled(Button)({
  width: '30vw',
  height: '5vh',
  backgroundColor: 'rgb(63,81,181)',
  color: 'white',
  border: '1px solid rgb(63,81,181)',
  margin: '1vh',
});

export const LoginTextField = styled(TextField)({
  width: '30vw',
  margin: '1vh',
});

export const GoSignUpButton = styled(Button)({
  color: '#0500FF',
  backgroundColor: 'transparent',
  fontSize: '1rem',
});
