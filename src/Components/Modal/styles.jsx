import { makeStyles } from '@material-ui/styles';

export function getModalStyle() {
  return {
    top: '52%',
    left: '40%',
    transform: 'translate(-41%, -55%)',
  };
}

export const useStyles = makeStyles((theme) => ({
  paper: {
    position: 'absolute',
    width: '60vw',
    border: '2px solid #000',
  },
  mpaper: {
    width: '100%',
    backgroundColor: 'RGB(250,250,250)',
    border: '2px solid lightgray',
    padding: '5vh 1vw',
  },
  mmodal: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: '30vh',
  },
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
}));
