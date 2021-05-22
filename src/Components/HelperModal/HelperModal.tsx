import { makeStyles, Modal } from '@material-ui/core';
import { useState } from 'react';
import pcHelp from '../../images/pcHelp.png';

export type HelperModalProps = {
  open: boolean;
  setOpen:
    | ((event: {}, reason: 'backdropClick' | 'escapeKeyDown') => void)
    | undefined;
};

export default function HelperModal({ open, setOpen }: HelperModalProps) {
  const classes = useStyles();
  const [modalStyle] = useState(getModalStyle);
  return (
    <Modal
      open={open}
      onClose={setOpen}
      className={classes.modal}
      aria-labelledby="simple-modal-title"
      aria-describedby="simple-modal-description"
    >
      <div style={modalStyle} className={classes.paper}>
        <img
          src={pcHelp}
          alt="pcHelp"
          width="1000vw"
          style={{ backgroundColor: 'white', width: '60vw' }}
        />
      </div>
    </Modal>
  );
}

export function getModalStyle() {
  return {
    top: '52%',
    left: '40%',
    transform: 'translate(-41%, -55%)',
  };
}

export const useStyles = makeStyles(() => ({
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
