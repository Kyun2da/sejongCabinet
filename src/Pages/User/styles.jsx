import { makeStyles, styled as mstyled } from '@material-ui/core/styles';
import { FormControl, TextField } from '@material-ui/core';
import styled from 'styled-components';

export const UserPageContainer = styled.div`
  width: 100%;
  height: 100%;
`;

export const UserpageTitle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5vw;
  font-weight: bold;
  padding: 1vh 0 2vh;
  border-bottom: 1px solid RGB(200, 200, 200);
  width: 80%;
`;

export const UserPageFormContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  display: flex;
  border: 3px solid lightgray;
  border-radius: 2vw;
  width: 40vw;
  height: 80%;
  padding: 2vh 0;
  column-gap: 2vh;
  margin: auto;
  margin-top: 14vh;
`;

export const CurrentCabinetStatus = styled.div`
  height: auto;
  overflow: hidden;
  justify-content: space-evenly;
  align-items: center;
  display: flex;
  margin: 4vh 0 5vh;
  font-size: 2vw;
  flex-direction: row;
`;

export const FormControlWrapper = mstyled(FormControl)({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  flexDirection: 'column',
  marginTop: '1vh',
  width: '100%',
  height: 'auto',
  overflow: 'hidden',
  margin: '2vh 0',
});

export const UserPageTextField = mstyled(TextField)({
  width: '25vw',
  margin: '1.5vh 0',
});

export const useStyles = makeStyles(() => ({
  cancleButton: {
    fontFamily: 'Noto Sans KR',
    fontWeight: 'bold',
    backgroundColor: 'red',
    color: 'white',
    opacity: 0.6,
    padding: '0.5vh 1vw',
    borderRadius: '0.5vw',
    '&:hover': {
      backgroundColor: 'red',
      opacity: 1,
    },
  },

  changeButton: {
    fontFamily: 'Noto Sans KR',
    fontWeight: 'bold',
    backgroundColor: 'rgb(63,81,181)',
    color: 'white',
    width: '25vw',
    height: '6vh',
    borderRadius: '0.5vw',
    margin: '1vh 0',
    '&:hover': {
      backgroundColor: 'rgb(150,150,150)',
    },
  },
}));
