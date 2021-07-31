import { Backdrop, Fade, Modal, styled } from '@material-ui/core';
import { useAppSelector, useCabinetSelector } from '../../redux/hooks';
import CabinetManageItem from '../CabinetManageItem';
import { CabinetTabType } from '../../redux/cabinet/cabinetSlice';
import CabinetManageAddItem from '../CabinetManageAddItem';

type CabinetManageModalProps = {
  open: boolean;
  handleClose:
    | ((event: {}, reason: 'backdropClick' | 'escapeKeyDown') => void)
    | undefined;
};

export default function CabinetManageModal({
  open,
  handleClose,
}: CabinetManageModalProps) {
  const { cabinet } = useAppSelector(useCabinetSelector);
  console.log(cabinet);
  return (
    <ModalContainer
      aria-labelledby="transition-modal-title"
      aria-describedby="transition-modal-description"
      open={open}
      onClose={handleClose}
      closeAfterTransition
      BackdropComponent={Backdrop}
      BackdropProps={{
        timeout: 500,
      }}
    >
      <Fade in={open}>
        <PageContainer>
          <h1>사물함 관리</h1>
          {cabinet?.map((item: CabinetTabType, i: number) => (
            <CabinetManageItem item={item} key={item.title + i} index={i} />
          ))}
          <h1>사물함 추가하기</h1>
          <CabinetManageAddItem />
        </PageContainer>
      </Fade>
    </ModalContainer>
  );
}

const ModalContainer = styled(Modal)({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  outline: 'none',
});

const PageContainer = styled('div')({
  width: '80%',
  height: '90vh',
  overflow: 'auto',
  backgroundColor: 'white',
  border: '2px solid #000',
  boxShadow:
    '0px 3px 5px -1px rgb(0 0 0 / 20%), 0px 5px 8px 0px rgb(0 0 0 / 14%), 0px 1px 14px 0px rgb(0 0 0 / 12%)',
  padding: '16px 32px 24px',
});
