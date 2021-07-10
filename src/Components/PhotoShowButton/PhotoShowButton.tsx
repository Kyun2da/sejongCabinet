import { Button, styled, Tooltip } from '@material-ui/core';
import ImageIcon from '@material-ui/icons/Image';
import { useMediaQuery } from 'react-responsive';
import media from '../../lib/styles/media';

type PhotoShowButtonProps = {
  onClick(): void;
};

export default function PhotoShowButton({ onClick }: PhotoShowButtonProps) {
  const isMobile = useMediaQuery({
    query: '(max-width:767px)',
  });

  return (
    <Tooltip
      title={<div style={{ fontSize: '1vw' }}>실제 사진 보기</div>}
      placement="bottom"
      arrow
    >
      <ShowPhotoButton onClick={onClick}>
        {isMobile ? null : 'photo'}
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
  margin: '0 0 0 5vw',
  '&:hover': {
    backgroundColor: 'white',
  },

  [`${media.medium}`]: {
    width: '4.5rem',
    borderRadius: '0.5rem',
  },
});

const CustomImageIcon = styled(ImageIcon)({
  fontSize: '2rem',
  marginLeft: '0.5vw',
});
