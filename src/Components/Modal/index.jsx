import React from 'react';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import PropTypes from 'prop-types';
import { Mobile, Default } from '../../MediaQuery';
import pcHelp from '../../image/pcHelp.png';
import mobileHelp from '../../image/mobileHelp.png';
import { getModalStyle, useStyles } from './styles';

const SimpleModal = (props) => {
  const { open, setOpen } = props;
  const classes = useStyles();
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
            <div style={{ width: '100vw' }}>
              <center>
                <div className={classes.mpaper}>
                  <img src={mobileHelp} alt="mobileHelp" width="100%" />
                </div>
              </center>
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
