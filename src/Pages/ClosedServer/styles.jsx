import { makeStyles } from '@material-ui/styles';

export const useStyles = makeStyles(() => ({
  root: {
    flexGrow: 1,
    backgroundColor: 'RGB(240,240,240)',
    transform: 'translateZ(0)',
    '@media all and (-ms-high-contrast: none)': {
      display: 'none',
    },
    padding: '20px 40px 30px',
  },
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '20px 40px 30px',
  },
  paper: {
    width: '28vw',
    backgroundColor: 'RGB(250,250,250)',
    border: 'none',
    borderRadius: '0.3vw',
    padding: '20px 40px 30px',
  },
  mpaper: {
    width: '70vw',
    height: '30vh',
    backgroundColor: 'RGB(250,250,250)',
    border: 'none',
    borderRadius: '5vw',
    padding: '20px 40px 30px',
  },
}));
