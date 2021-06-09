import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  styled,
  Typography,
} from '@material-ui/core';

type CabinetEnrollPhotoCardProps = {
  image: string | undefined;
  photoType: 'position' | 'real';
};

export default function CabinetEnrollPhotoCard({
  image,
  photoType,
}: CabinetEnrollPhotoCardProps) {
  return (
    <CustomCard>
      <CustomCardMedia image={image} title="사물함 이미지" />
      <CardContent>
        <CustomTypography gutterBottom variant="h5">
          {photoType === 'position' ? '사물함 위치 사진' : '사물함 실물 사진'}
        </CustomTypography>
      </CardContent>
      <CustomCardActions>
        <Button size="small" color="primary">
          사진 등록하기
        </Button>
      </CustomCardActions>
    </CustomCard>
  );
}

const CustomCard = styled(Card)({
  flexGrow: 1,
  margin: '0 24px',
});

const CustomTypography = styled(Typography)({
  textAlign: 'center',
});

const CustomCardMedia = styled(CardMedia)({
  height: '240px',
});

const CustomCardActions = styled(CardActions)({
  justifyContent: 'flex-end',
});
