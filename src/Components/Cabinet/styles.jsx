import { makeStyles } from '@material-ui/core/styles';
import styled from 'styled-components';

export const Content = styled.div`
  font-family: 'Anton';
  width: 100%;
`;

export const MContent = styled.div`
  font-family: 'Anton';
  width: 100%;
  display: flex;
  justify-content: center;
  padding: 4vh 0;
  margin-left: 5vw;
  overflow: hidden;
`;

export const StatusValue = styled.div`
  margin: 0 1vw 0 1vw;
`;

export const useStyles = makeStyles((theme) => ({
  root: {
    width: 'auto',
    overflow: 'hidden',
  },

  mroot: {
    width: '50vw',
    overflow: 'scroll',
  },
  button: {
    border: '3px solid #00d145',
    padding: theme.spacing(1),
    fontFamily: 'Anton',
    width: '5.5vw',
    textAlign: 'center',
    fontSize: '1vw',
    color: 'rgb(30,30,30)',
    '&:hover': {
      backgroundColor: '#00d145',
      color: 'white',
    },
    '&:active': {
      backgroundColor: '#00d145',
      color: 'white',
    },
    '&:target': {
      backgroundColor: '#00d145',
      color: 'white',
    },
    '&:focus': {
      backgroundColor: '#00d145',
      color: 'white',
    },
  },
  button2: {
    fontFamily: 'Anton',
    border: '3px solid lightgray',
    padding: theme.spacing(1),
    width: '5.5vw',
    color: 'gray',
    fontWeight: 'bold',
    fontSize: '1vw',
    backgroundColor: 'lightgray',
    cursor: 'default',
    '&:hover': {
      backgroundColor: 'lightgray',
    },
  },
  button3: {
    fontFamily: 'Anton',
    border: '3px solid lightgray',
    padding: theme.spacing(1),
    width: '5.5vw',
    color: 'white',
    fontWeight: 'bold',
    fontSize: '1vw',
    backgroundColor: 'lightgray',
  },
  button4: {
    fontFamily: 'Anton',
    border: '3px solid #008000',
    padding: theme.spacing(1),
    width: '5.5vw',
    fontWeight: 'bold',
    fontSize: '1vw',
    backgroundColor: '#008000',
    '&:hover': {
      backgroundColor: '#DF1840',
      color: 'white',
      border: '3px solid #DF1840',
    },
    '&:focus': {
      backgroundColor: '#DF1840',
      color: 'white',
      border: '3px solid #DF1840',
    },
  },
  Mbutton: {
    border: '2px solid #00d145',
    fontFamily: 'Anton',
    borderRadius: '5px',
    backgroundColor: 'white',
    width: '1.8rem',
    height: '1.8rem',
    fontSize: '10px',
    outline: 'none',
    color: 'rgb(30,30,30)',

    '&:hover': {
      backgroundColor: '#00d145',
      color: 'white',
    },
    '&:active': {
      backgroundColor: '#00d145',
      color: 'white',
    },
    '&:target': {
      backgroundColor: '#00d145',
      color: 'white',
    },
    '&:focus': {
      backgroundColor: '#00d145',
      color: 'white',
      outline: 'none',
    },
  },
  Mbutton2: {
    border: '2px solid lightgray',
    fontFamily: 'Anton',
    width: '1.8rem',
    height: '1.8rem',
    fontSize: '10px',
    color: 'white',
    outline: 'none',
    backgroundColor: 'lightgray',
    borderRadius: '3px',
  },
  Mbutton3: {
    fontFamily: 'Anton',
    borderRadius: '4px',
    border: '2px solid lightgray',
    color: 'white',
    width: '1.8rem',
    height: '1.8rem',
    fontSize: '7px',
    textAlign: 'center',
    backgroundColor: 'lightgray',
    '&:focus': {
      outline: 'none',
    },
  },
  Mbutton4: {
    fontFamily: 'Anton',
    borderRadius: '3px',
    border: '2px solid #008000',
    color: 'white',
    width: '1.8rem',
    height: '1.8rem',
    fontSize: '8px',
    backgroundColor: '#008000',
    '&:hover': {
      backgroundColor: '#DF1840',
      color: 'white',
      border: '2px solid #DF1840',
      outline: 'none',
    },
    '&:focus': {
      backgroundColor: '#DF1840',
      color: 'white',
      border: '2px solid #DF1840',
      outline: 'none',
    },
  },
}));
