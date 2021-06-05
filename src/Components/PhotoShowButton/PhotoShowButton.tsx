import { Button, styled, Tooltip } from '@material-ui/core';
import ImageIcon from '@material-ui/icons/Image';

type PhotoShowButtonProps = {
  onClick(): void;
};

export default function PhotoShowButton({ onClick }: PhotoShowButtonProps) {
  return (
    <Tooltip
      title={<div style={{ fontSize: '1vw' }}>실제 사진 보기</div>}
      placement="bottom"
      arrow
    >
      <ShowPhotoButton onClick={onClick}>
        photo
        <CustomImageIcon />
      </ShowPhotoButton>
    </Tooltip>
  );
}

const ShowPhotoButton = styled(Button)({
  backgroundColor: 'white',
  width: 'auto',
  fontFamily: 'Anton',
  fontSize: '1.2rem',
  margin: '0 0 0 2vw',
  '&:hover': {
    backgroundColor: 'white',
  },
});

const CustomImageIcon = styled(ImageIcon)({
  fontSize: '2rem',
  marginLeft: '0.5vw',
});
