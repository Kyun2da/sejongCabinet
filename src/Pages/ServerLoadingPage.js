import React from 'react';
import { CircularProgress } from '@material-ui/core/';
import Modal from '@material-ui/core/Modal';
import { makeStyles } from '@material-ui/core/styles';
import { Mobile, Default } from '../MediaQuery';

const useStyles = makeStyles((theme) => ({
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

const ServerLoadingPage = () => {
  const classes = useStyles();
  const rootRef = React.useRef(null);
  return (
    <div>
      <Default>
        <div className={classes.root} ref={rootRef} style={{ height: '100vh' }}>
          <Modal
            disablePortal
            disableEnforceFocus
            disableAutoFocus
            open
            aria-labelledby="server-modal-title"
            aria-describedby="server-modal-description"
            className={classes.modal}
            container={() => rootRef.current}
          >
            <div
              className={classes.paper}
              style={{
                flexDirection: 'row',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}
            >
              <div style={{ fontSize: '1vw' }}>
                <h2 id="server-modal-title">현재 서버가 닫혀있습니다.</h2>
                <p id="server-modal-description">
                  관리자가 서버가 열 때 까지 잠시 기다려주세요.
                </p>
              </div>
              <div style={{ paddingLeft: '4vw' }}>
                <CircularProgress size="3.5vw" color="black" />
              </div>
            </div>
          </Modal>
        </div>
      </Default>
      <Mobile>
        <div className={classes.root} ref={rootRef} style={{ height: '100vh' }}>
          <Modal
            disablePortal
            disableEnforceFocus
            disableAutoFocus
            open
            aria-labelledby="server-modal-title"
            aria-describedby="server-modal-description"
            className={classes.modal}
            container={() => rootRef.current}
            style={{ marginBottom: '20vh' }}
          >
            <div
              className={classes.mpaper}
              style={{
                flexDirection: 'column',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}
            >
              <div style={{ margin: '3vh 0' }}>
                <CircularProgress size="8vh" color="black" />
              </div>
              <div style={{ padding: '2vh 0', fontSize: '1.5vh' }}>
                <h2 id="server-modal-title">현재 서버가 닫혀있습니다.</h2>
                <p id="server-modal-description">
                  관리자가 서버가 열 때 까지 잠시 기다려주세요.
                </p>
              </div>
            </div>
          </Modal>
        </div>
      </Mobile>
    </div>
  );
};

export default ServerLoadingPage;
