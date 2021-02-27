import { makeStyles } from '@material-ui/styles';

export const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: 'RGB(240,240,240)',
    transform: 'translateZ(0)',
    '@media all and (-ms-high-contrast: none)': {
      display: 'none',
    },
  },
  modal: {
    display: 'flex',
    padding: theme.spacing(1),
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    width: '28vw',
    backgroundColor: 'RGB(250,250,250)',
    border: 'none',
    borderRadius: '0.3vw',
    padding: theme.spacing(2, 4, 3),
  },
  mpaper: {
    width: '70vw',
    height: '30vh',
    backgroundColor: 'RGB(250,250,250)',
    border: 'none',
    borderRadius: '5vw',
    padding: theme.spacing(2, 4, 3),
  },
}));
