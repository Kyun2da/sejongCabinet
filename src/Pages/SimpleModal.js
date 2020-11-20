import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import PropTypes from 'prop-types';
import { Mobile, Default } from '../MediaQuery';
import pcHelp from '../image/pcHelp.png';
import mobileHelp from '../image/mobileHelp.png';

function getModalStyle() {
  return {
    top: `52%`,
    left: `40%`,
    transform: `translate(-41%, -55%)`,
  };
}

const useStyles = makeStyles((theme) => ({
  paper: {
    position: 'absolute',
    width: '60vw',
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    padding: theme.spacing(2, 6, 3),
  },
  mpaper: {
    height: 'auto',
    backgroundColor: 'RGB(250,250,250)',
    border: '2px solid lightgray',
    padding: '5vh 1vw',
    justifyContent: 'center',
    alignItems: 'center',
    display: 'flex',
  },
  mmodal: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: '30vh',
    justifyContent: 'center',
  },
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
}));

const SimpleModal = (props) => {
  const { open, setOpen } = props;
  const classes = useStyles();
  // getModalStyle is not a pure function, we roll the style only on the first render
  const [modalStyle] = React.useState(getModalStyle);

  const body = (
    <div style={modalStyle} className={classes.paper}>
      <img
        src={pcHelp}
        alt="pcHelp"
        width="1000vw"
        style={{ backgroundColor: 'white', width: '60vw' }}
      />
      <SimpleModal />
    </div>
  );

  return (
    <div>
      <Default>
        <Modal
          open={open}
          onClose={setOpen}
          className={classes.modal}
          aria-labelledby="simple-modal-title"
          aria-describedby="simple-modal-description"
        >
          {body}
        </Modal>
      </Default>
      <Mobile>
        <Modal
          aria-labelledby="transition-modal-title"
          aria-describedby="transition-modal-description"
          className={classes.mmodal}
          open={open}
          onClose={setOpen}
          disableEnforceFocus
          disableAutoFocus
          closeAfterTransition
          BackdropComponent={Backdrop}
          BackdropProps={{
            timeout: 500,
          }}
        >
          <Fade in={open}>
            <div className={classes.mpaper}>
              <div>
                <img src={mobileHelp} alt="mobileHelp" width="85%" />
              </div>
            </div>
          </Fade>
        </Modal>
      </Mobile>
    </div>
  );
};

SimpleModal.propTypes = {
  open: PropTypes.bool.isRequired,
  setOpen: PropTypes.func.isRequired,
};

export default SimpleModal;
