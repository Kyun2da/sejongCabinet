import { makeStyles, styled } from '@material-ui/core/styles';
import { Button, Container, TextField, Typography } from '@material-ui/core';

export const SignUpContainer = styled(Container)({
  display: 'flex',
  alignItems: 'center',
  flexDirection: 'column',
  width: '100%',
  height: '98vh',
});

export const useStyles = makeStyles(() => ({
  backwards: {
    opacity: 0.6,

    '&:hover': {
      backgroundColor: 'transparent',
      opacity: 1,
    },
  },

  signUpForm: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    display: 'flex',
    borderTop: '3px solid lightgray',
    borderBottom: '3px solid lightgray',
    padding: '2vh 5vw 6vh',
    borderRadius: '2rem',
  },
}));

export const LogoMainTitle = styled(Typography)({
  fontSize: '0.8vw',
  fontWeight: 'bold',
  letterSpacing: '0.5vw',
  borderBottom: '0.1vw solid black',
  margin: '0.7rem 0 0',
});

export const LogoSubTitle = styled(Typography)({
  fontSize: '0.6vw',
  fontWeight: 'bolder',
  letterSpacing: '0.4vw',
  margin: '0.15rem 0 2rem',
});

export const GoLoginButton = styled(Button)({
  position: 'absolute',
  backgroundColor: 'transparent',
  width: 'auto',
});

export const SignUpButton = styled(Button)({
  width: '30vw',
  height: '5vh',
  backgroundColor: 'rgb(63,81,181)',
  color: 'white',
  border: '1px solid rgb(63,81,181)',
  marginTop: '1vh',
});

export const SignUpHeader = styled(Container)({
  display: 'inline-flex',
  flexDirection: 'row',
  width: '100%',
});

export const SignUpTitle = styled(Typography)({
  fontSize: '2.5rem',
  fontWeight: 'bold',
  letterSpacing: '0.1vw',
  marginTop: '1vh',
  textAlign: 'center',
  marginBottom: '4vh',
});

export const SignUpTextField = styled(TextField)({
  width: '30vw',
  margin: '1.5vh',
});
