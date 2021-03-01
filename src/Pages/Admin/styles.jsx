import { styled as mstyled } from '@material-ui/core/styles';
import { Container, FormControl, TextField } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';

export const AdminContainer = mstyled(Container)({
  display: 'flex',
  alignItems: 'center',
  flexDirection: 'column',
  marginTop: '14vh',
  width: '40vw',
  height: '80vh',
  border: '3px solid lightgray',
  borderRadius: '2vw',
  padding: '2vh 0',
  columnGap: '2vh',
  flexGrow: 1,
});

export const AdminFormTitle = mstyled(Container)({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  fontSize: '1.5vw',
  fontWeight: 'bold',
  padding: '1vh 0 2vh',
  borderBottom: '1px solid RGB(200, 200, 200)',
  fontFamily: 'Noto Sans KR',
  width: '80%',
});

export const AdminUtilityWrapper = mstyled(Container)({
  height: 'auto',
  overflow: 'hidden',
  justifyContent: 'space-evenly',
  alignItems: 'center',
  display: 'flex',
  margin: '4vh 0 2vh',
  fontSize: '2vw',
  flexDirection: 'column',
});

export const AdminFormControl = mstyled(FormControl)({
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

export const AdminTextField = mstyled(TextField)({
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
    padding: '0.5vh 2vw',
    margin: '3vh 0 0',
    borderRadius: '0.5vw',
    '&:hover': {
      backgroundColor: 'red',
      opacity: 1,
    },
  },

  changeButton: {
    fontFamily: 'Noto Sans KR',
    fontWeight: 'bold',
    backgroundColor: 'rgb(180,180,180)',
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
