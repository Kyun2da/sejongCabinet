import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Input,
  styled,
  Typography,
} from '@material-ui/core';
import { useEffect, useState } from 'react';
import { storage } from '../../config/firebase.config';
import useDownloadURL from '../../hooks/useDownloadURL';

type CabinetEnrollPhotoCardProps = {
  image: string | undefined;
  photoType: 'position' | 'real';
  index: number;
};

export default function CabinetEnrollPhotoCard({
  image,
  photoType,
  index,
}: CabinetEnrollPhotoCardProps) {
  const [url, setUrl] = useState('');
  const handleChange = (e: any) => {
    const uploadTask = storage
      .ref(`/${index}/${photoType}`)
      .put(e.currentTarget.files[0]);
    uploadTask.on(
      'state_changed',
      (snapshot) => null,
      (error) => {
        console.error(error);
      },
      () => {
        storage
          .ref(`/${index}/${photoType}`)
          .getDownloadURL()
          .then((url) => {
            setUrl(url);
          });
      },
    );
  };

  useEffect(() => {
    storage
      .ref(`/${index}/${photoType}`)
      .getDownloadURL()
      .then((url) => {
        setUrl(url);
      });
  }, []);
  return (
    <CustomCard>
      <CustomCardHeader
        title={
          <TitleTypography>
            {photoType === 'position' ? '사물함 위치 사진' : '사물함 실물 사진'}
          </TitleTypography>
        }
      ></CustomCardHeader>
      <ImageContainer>
        <CustomImage src={url || image}></CustomImage>
      </ImageContainer>
      <CustomCardActions>
        <PhotoInput
          accept="image/*"
          id={`${index}/${photoType}`}
          multiple
          type="file"
          onChange={handleChange}
        />
        <label htmlFor={`${index}/${photoType}`}>
          <Button color="primary" component="span">
            등록하기
          </Button>
        </label>
      </CustomCardActions>
    </CustomCard>
  );
}

const CustomCard = styled(Card)({
  flexGrow: 1,
  margin: '0 24px',
});

const ImageContainer = styled('div')({
  width: 'auto',
  textAlign: 'center',
});

const CustomImage = styled('img')({
  maxWidth: '100%',
  height: '320px',
  margin: '16px',
});

const CustomCardActions = styled(CardActions)({
  justifyContent: 'flex-end',
});

const PhotoInput = styled('input')({
  display: 'none',
});

const CustomCardHeader = styled(CardHeader)({
  textAlign: 'center',
  color: 'white',
  backgroundColor: 'black',
});

const TitleTypography = styled(Typography)({
  fontFamily: 'Noto Sans KR',
  fontSize: '1.2rem',
});
