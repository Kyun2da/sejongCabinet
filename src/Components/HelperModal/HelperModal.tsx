import { makeStyles, Modal, styled } from '@material-ui/core';
import { useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import pcHelp from '../../images/pcHelp.png';
import mobileHelp from '../../images/mobileHelp.png';

export type HelperModalProps = {
  open: boolean;
  setOpen:
    | ((event: {}, reason: 'backdropClick' | 'escapeKeyDown') => void)
    | undefined;
};

export default function HelperModal({ open, setOpen }: HelperModalProps) {
  const classes = useStyles();
  const [modalStyle] = useState(getModalStyle);

  const isMobile = useMediaQuery({
    query: '(max-width:767px)',
  });
  return (
    <Modal
      open={open}
      onClose={setOpen}
      className={isMobile ? classes.mmodal : classes.modal}
      aria-labelledby="simple-modal-title"
      aria-describedby="simple-modal-description"
    >
      {isMobile ? (
        <MobileModalContainer className={classes.mpaper}>
          <MobileModalImage src={mobileHelp} alt="mobileHelp" />
        </MobileModalContainer>
      ) : (
        <PcModalContainer className={classes.paper}>
          <PcModalImage
            src={pcHelp}
            alt="pcHelp"
            width="1000vw"
            style={{ backgroundColor: 'white', width: '60vw' }}
          />
        </PcModalContainer>
      )}
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
    position: 'absolute',
    width: '90%',
    backgroundColor: 'RGB(250,250,250)',
  },
  mmodal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
}));

const PcModalContainer = styled('div')({
  backgroundColor: 'white',
  padding: '3rem',
  border: 'none',
  borderRadius: '3rem',
});
const PcModalImage = styled('img')({
  width: '1000vw',
});
const MobileModalContainer = styled('div')({
  backgroundColor: 'white',
  padding: '0.5rem',
  border: 'none',
  borderRadius: '1rem',
});
const MobileModalImage = styled('img')({
  width: '100%',
});
