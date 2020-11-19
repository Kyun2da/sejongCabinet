import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import PropTypes from 'prop-types';
import pcHelp from '../image/pcHelp.png';

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
    width: '55vw',
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

const SimpleModal = (props) => {
  const { open, setOpen } = props;
  const classes = useStyles();
  // getModalStyle is not a pure function, we roll the style only on the first render
  const [modalStyle] = React.useState(getModalStyle);

  const body = (
    <div style={modalStyle} className={classes.paper}>
      <h2 id="simple-modal-title">도움말</h2>
      <img
        src={pcHelp}
        alt="pcHelp"
        width="1000vw"
        style={{ padding: '1rem', backgroundColor: 'white', width: '55vw' }}
      />
      <SimpleModal />
    </div>
  );

  return (
    <>
      <Modal
        open={open}
        onClose={setOpen}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        {body}
      </Modal>
    </>
  );
};

SimpleModal.propTypes = {
  open: PropTypes.bool.isRequired,
  setOpen: PropTypes.func.isRequired,
};

export default SimpleModal;
