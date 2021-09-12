import {
  Accordion,
  AccordionActions,
  AccordionDetails,
  AccordionSummary,
  Button,
  Divider,
  styled,
  TextField,
  Typography,
} from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { useState } from 'react';
import { CabinetTabType } from '../../redux/cabinet/cabinetSlice';
import customSwal from '../../utils/alert';
import changeFirebaseCabinetTab from '../../utils/firebase/changeFirebaseCabinetTab';
import deleteFirebaseCabinetTab from '../../utils/firebase/deleteFirebaseCabinetTab';
import initializeFirebaseCabinetTab from '../../utils/firebase/initializeFirebaseCabinetTab';
import cabinetNoImage1 from '../../images/cabinetNoImage1.png';
import cabinetNoImage2 from '../../images/cabinetNoImage2.png';
import CabinetEnrollPhotoCard from '../CabinetManageEnrollPhoto';

type CabinetManageItemProps = {
  item: CabinetTabType;
  index: number;
};

export default function CabinetManageItem({
  item,
  index,
}: CabinetManageItemProps) {
  const [title, setTitle] = useState(item.title);
  const [width, setWidth] = useState(item.width);
  const [height, setHeight] = useState(item.height);
  const handleSubmit = () => {
    const isDifferent = width !== item.width || height !== item.height;
    changeFirebaseCabinetTab(index, title, width, height, isDifferent);
  };
  const handleInitialize = () => {
    customSwal(
      'warning',
      '사물함 초기화 주의!',
      '현재 등록된 사물함탭이 전부 예약가능 상태로 초기화 됩니다. 정말 사물함을 초기화 하시겠습니까?',
      true,
    ).then((result) => {
      if (result.isConfirmed) {
        initializeFirebaseCabinetTab(index);
        // 가로 세로 정보 바꾸고 모든 아이템을 0으로 초기화
      }
    });
  };
  const handleDelete = () => {
    deleteFirebaseCabinetTab(index);
  };
  return (
    <CabinetManageItemContainer>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1c-content"
          id="panel1c-header"
        >
          <TitleTypography>{item.title}</TitleTypography>
        </AccordionSummary>
        <TitleDivider />
        <AccordionDetailsContainer>
          <CabinetPhotoContainer>
            <CabinetEnrollPhotoCard
              image={cabinetNoImage2}
              photoType="position"
              index={index}
            />
            <CabinetEnrollPhotoCard
              image={cabinetNoImage1}
              photoType="real"
              index={index}
            />
          </CabinetPhotoContainer>
          <CustomDivider />
          <TextFieldContainer>
            <TextField
              label="제목"
              defaultValue={title}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                setTitle(e.target.value);
              }}
              helperText="변경하고자 하는 제목을 입력해주세요."
              variant="outlined"
            />
            <TextField
              label="가로"
              defaultValue={width}
              type="number"
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                setWidth(parseInt(e.target.value));
              }}
              helperText="변경하고자 하는 가로를 입력해주세요."
              variant="outlined"
            />
            <TextField
              label="세로"
              defaultValue={height}
              type="number"
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                setHeight(parseInt(e.target.value));
              }}
              helperText="변경하고자 하는 세로를 입력해주세요."
              variant="outlined"
            />
          </TextFieldContainer>
        </AccordionDetailsContainer>
        <Divider />
        <AccordionActions>
          <Button
            size="small"
            style={{ color: 'red' }}
            onClick={handleInitialize}
          >
            해당 탭의 사물함 초기화하기
          </Button>
          <Button size="small" style={{ color: 'red' }} onClick={handleDelete}>
            삭제하기
          </Button>
          <Button size="small" color="primary" onClick={handleSubmit}>
            저장하기
          </Button>
        </AccordionActions>
      </Accordion>
    </CabinetManageItemContainer>
  );
}

const CabinetManageItemContainer = styled('div')({ marginBottom: '15px' });

const AccordionDetailsContainer = styled(AccordionDetails)({
  justifyContent: 'space-evenly',
  flexDirection: 'column',
});

const CabinetPhotoContainer = styled('div')({
  display: 'flex',
  marginBottom: '24px',
});

const TextFieldContainer = styled('div')({
  marginTop: '24px',
  display: 'flex',
  // justifyContent: 'space-evenly',
  columnGap: '2.5vw',
  marginLeft: '1.2vw',
});

const TitleTypography = styled(Typography)({
  fontFamily: 'Anton,Noto Sans KR',
  fontSize: '1.2rem',
});

const CustomDivider = styled(Divider)({
  margin: '2vh 0',
});

const TitleDivider = styled(Divider)({
  marginBottom: '3vh',
});
