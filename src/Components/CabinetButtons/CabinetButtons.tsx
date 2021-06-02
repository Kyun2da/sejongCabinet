import React, { useEffect, useState, useRef } from 'react';
import {
  styled,
  Button,
  Container,
  Grid,
  Tooltip,
  Radio,
  RadioGroup,
  FormControl,
  FormLabel,
  FormControlLabel,
} from '@material-ui/core';
import {
  useAppDispatch,
  useAppSelector,
  useUserSelector,
} from '../../redux/hooks';
import { setUserInfo } from '../../redux/user/userSlice';
import { database } from '../../config/firebase.config';
import media from '../../lib/styles/media';
import changeCabinetStatus from '../../utils/firebase/changeCabinetStatus';
import AppLayout from '../AppLayout';
import type {
  CabinetTabType,
  CabinetItemType,
} from '../../redux/cabinet/cabinetSlice';

export type CabinetData = {
  index: number;
  data: CabinetTabType;
};

export default function CabinetButtons({
  data: { title, width, height, item },
  index,
}: CabinetData) {
  const dispatch = useAppDispatch();
  const [descriptionMode, setDescriptionMode] = useState('number');
  const [select, setSelect] = useState(-1);
  const [count, setCount] = useState([0, 0, 0]);
  const { uuid, adminType, studentID, name, cabinetIdx, cabinetTitle } =
    useAppSelector(useUserSelector);
  const cabinetRef = useRef<HTMLDivElement>(null);
  const submitRef = useRef<HTMLDivElement>(null);

  const showButtonText = () => {
    if (adminType) {
      if (item[select].status === 0) {
        return '고장내기';
      } else if (item[select].status === 1) {
        return '취소하기';
      } else {
        return '고치기';
      }
    } else {
      if (item[select].uuid === uuid) {
        return '취소하기';
      } else {
        return '신청하기';
      }
    }
  };

  const onClickCabinetButton = (idx: number) => {
    if (!adminType && item[idx].status === 0 && cabinetIdx) {
      return alert('신청한 사물함이 있습니다.');
    }
    return setSelect(idx);
  };

  const onClickSubmitButton = () => {
    if (adminType === 0) {
      if (item[select].status === 0) {
        database.ref(`cabinet/${index}/item/${select}`).set({
          status: 1,
          studentID: studentID,
          name: name,
          uuid: uuid,
        });

        dispatch(
          setUserInfo({
            adminType: 0,
            cabinetIdx: select,
            cabinetTitle: title,
            name: name,
            studentID: studentID,
          }),
        );
      } else if (item[select].uuid === uuid) {
        database.ref(`cabinet/${index}/item/${select}`).set({
          status: 0,
        });

        dispatch(
          setUserInfo({
            adminType: 0,
            cabinetIdx: 0,
            cabinetTitle: '',
            name: name,
            studentID: studentID,
          }),
        );
      }
    } else {
      if (item[select].status === 0) {
        changeCabinetStatus(index, select, 2);
      } else if (item[select].status === 1) {
        changeCabinetStatus(index, select, 0);
      } else if (item[select].status === 2) {
        changeCabinetStatus(index, select, 0);
      }
    }
  };

  useEffect(() => {
    let newCount = [0, 0, 0];
    const cabinetSize = width * height;

    for (let i = 0; i < cabinetSize; i += 1) {
      if (item[i].status === 0) {
        newCount[0] += 1;
      } else if (item[i].status === 2) {
        newCount[2] += 1;
      } else {
        newCount[1] += 1;
      }
    }
    setCount(newCount);
  }, [item]);

  // 캐비넷 컨테이너 이외 클릭시 setSelect(-1) -> 캐비넷 컨테이너 width를 최소로 줄여야함
  useEffect(() => {
    function handleClickOutside(e: MouseEvent): void {
      if (
        cabinetRef.current &&
        !cabinetRef.current.contains(e.target as Node) &&
        !submitRef.current?.contains(e.target as Node)
      ) {
        setSelect(-1);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [cabinetRef]);

  const isMobile = () => {
    return window.innerWidth <= 1024;
  };

  const handleDescriptionMode = (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    setDescriptionMode(event.target.value);
  };

  const showGridRow = () => {
    return (
      <GridRowDiv>
        <GridContentsDiv ref={cabinetRef}>{showGridColumn()}</GridContentsDiv>
      </GridRowDiv>
    );
  };

  const showGridColumn = () => {
    return [...Array(height)].map((v, i) => (
      <Grid container spacing={1} key={`${title}` + 'grid' + i}>
        {loadGridRow(i)}
      </Grid>
    ));
  };

  const descriptionCabinet = (idx: number) => {
    if (descriptionMode === 'number') {
      return idx + 1;
    } else if (descriptionMode === 'studentID') {
      return item[idx].studentId;
    } else {
      return item[idx].name;
    }
  };

  const loadCabinetButton = (idx: number) => {
    if (item[idx].status === 0) {
      return (
        <AvailableCabinetButton onClick={() => onClickCabinetButton(idx)}>
          {idx + 1}
        </AvailableCabinetButton>
      );
    } else if (item[idx].status === 1 && item[idx].uuid === uuid) {
      return (
        <MyCabinetButton onClick={() => onClickCabinetButton(idx)}>
          {descriptionCabinet(idx)}
        </MyCabinetButton>
      );
    } else if (item[idx].status === 1) {
      return (
        <RegisteredCabinetButton disabled={adminType !== 1}>
          {descriptionCabinet(idx)}
        </RegisteredCabinetButton>
      );
    } else if (item[idx].status === 2) {
      return (
        <BrokenCabinetButton
          onClick={() => onClickCabinetButton(idx)}
          disabled={adminType !== 1}
        >
          🚧
        </BrokenCabinetButton>
      );
    }
  };

  const loadGridRow = (i: number) => {
    return [...Array(width)].map((v, index) => {
      const arrIdx = i * width + index;

      if (isMobile()) {
        return (
          <Grid>
            <Grid item xs={1} key={`${title}` + 'cabinet' + arrIdx}>
              {loadCabinetButton(arrIdx)}
            </Grid>
          </Grid>
        );
      } else {
        return (
          <Grid item xs={1} key={`${title}` + 'cabinet' + arrIdx}>
            {loadCabinetButton(arrIdx)}
          </Grid>
        );
      }
    });
  };

  return (
    <CabinetContainer>
      <CabinetTabsContainer>
        <CabinetTitle>{title}</CabinetTitle>
        <CabinetInfoContainer>
          <CabinetDescriptionContainer>
            <CabinetStatusTooltip
              title={<TooltipTitle>사물함 번호로 보기</TooltipTitle>}
              placement="top"
              arrow
            >
              <Radio
                checked={descriptionMode === 'number'}
                onChange={handleDescriptionMode}
                color="default"
                value="number"
                name="radio-button-demo"
                inputProps={{ 'aria-label': 'number' }}
              />
            </CabinetStatusTooltip>
            <CabinetStatusTooltip
              title={<TooltipTitle>이름으로 보기</TooltipTitle>}
              placement="top"
              arrow
            >
              <Radio
                checked={descriptionMode === 'name'}
                onChange={handleDescriptionMode}
                color="default"
                value="name"
                name="radio-button-demo"
                inputProps={{ 'aria-label': 'name' }}
              />
            </CabinetStatusTooltip>
            <CabinetStatusTooltip
              title={<TooltipTitle>학번으로 보기</TooltipTitle>}
              placement="top"
              arrow
            >
              <Radio
                checked={descriptionMode === 'studentID'}
                onChange={handleDescriptionMode}
                color="default"
                value="studentID"
                name="radio-button-demo"
                inputProps={{ 'aria-label': 'studentID' }}
              />
            </CabinetStatusTooltip>
          </CabinetDescriptionContainer>
          <CabinetCountContainer>
            <CabinetStatusTooltip
              title={<TooltipTitle>신청 가능</TooltipTitle>}
              placement="left"
              arrow
            >
              <CabinetStatusValue>✅ : {count[0]}</CabinetStatusValue>
            </CabinetStatusTooltip>
            <CabinetStatusTooltip
              title={<TooltipTitle>신청 불가</TooltipTitle>}
              placement="left"
              arrow
            >
              <CabinetStatusValue>❌ : {count[1]}</CabinetStatusValue>
            </CabinetStatusTooltip>
            <CabinetStatusTooltip
              title={<TooltipTitle>신청 고장</TooltipTitle>}
              placement="left"
              arrow
            >
              <CabinetStatusValue>🚧 : {count[2]}</CabinetStatusValue>
            </CabinetStatusTooltip>
          </CabinetCountContainer>
        </CabinetInfoContainer>
      </CabinetTabsContainer>
      <CabinetButtonsContainer>{showGridRow()}</CabinetButtonsContainer>
      <CabinetSelectContainer>
        <SelectIdxContainer>
          {select === -1 ? '-' : select + 1}
        </SelectIdxContainer>
        <SelectStatusContainer ref={submitRef}>
          {select === -1 ? (
            <Button disabled>사물함을 선택해주세요</Button>
          ) : (
            <SelectButton onClick={onClickSubmitButton}>
              {showButtonText()}
            </SelectButton>
          )}
        </SelectStatusContainer>
      </CabinetSelectContainer>
    </CabinetContainer>
  );
}

const CabinetContainer = styled('div')({
  width: '100%',
  position: 'absolute',

  [`${media.medium}`]: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
  },
});

const CabinetTabsContainer = styled(Container)({
  width: '100%',
  display: 'flex',
  alignItems: 'center',
  fontFamily: 'Anton',
  margin: '1vh 0 5vh',

  [`${media.medium}`]: {
    margin: '0',
  },
});

const CabinetButtonsContainer = styled('div')({
  marginLeft: '3vw',
  marginTop: '8vh',
  width: '90%',

  [`${media.medium}`]: {
    marginLeft: '0',
    marginTop: '4vh',
    width: '90%',
  },
});

const CabinetSelectContainer = styled('div')({
  width: '100%',
  flexDirection: 'column',

  [`${media.medium}`]: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: '8vh',
    paddingBottom: '5vh',
  },
});

const DescriptionFormControl = styled(FormControl)({
  display: 'flex',
  alignItems: 'flex-end',
  flexDirection: 'column',
});

const SelectIdxContainer = styled('div')({
  fontFamily: 'Anton,Noto Sans KR',
  display: 'flex',
  fontSize: '2vw',
  justifyContent: 'flex-end',
  marginRight: '4vw',
  marginTop: '2vh',

  [`${media.medium}`]: {
    fontSize: '1.5rem',
    marginRight: '0',
    marginTop: '0',
    position: 'absolute',
    left: '30vw',
  },
});

const SelectStatusContainer = styled('div')({
  fontFamily: 'Anton,Noto Sans KR',
  display: 'flex',
  fontSize: '3vw',
  justifyContent: 'flex-end',
  marginRight: '3vw',
  marginTop: '2vh',

  [`${media.medium}`]: {
    fontSize: '1.5rem',
    marginRight: '0',
    marginTop: '0',
    height: '4vh',
    position: 'absolute',
    right: '10vw',
  },
});

const CabinetTitle = styled('div')({
  fontFamily: 'Anton,Noto Sans KR',
  fontSize: '3vw',
  marginLeft: '2vw',

  [`${media.medium}`]: {
    display: 'none',
  },
});

const CabinetInfoContainer = styled(Container)({
  fontSize: '1rem',
  right: 50,
  top: 10,
  position: 'absolute',

  [`${media.medium}`]: {
    position: 'static',
  },
});

const CabinetDescriptionContainer = styled('div')({
  display: 'flex',
  justifyContent: 'flex-end',
  alignItems: 'flex-end',
  flexDirection: 'row',
  marginTop: '2vh',

  [`${media.medium}`]: {
    display: 'none',
    marginTop: '0',
  },
});

const CabinetCountContainer = styled('div')({
  display: 'flex',
  alignItems: 'flex-end',
  flexDirection: 'column',
  textAlign: 'left',
  marginTop: '1vh',

  [`${media.medium}`]: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    border: '2vw solid RGB(240,240,240)',
    borderRadius: '10px',
    marginTop: '0',
    padding: '1.5vh 0',
    textAlign: 'center',
  },
});

const GridRowDiv = styled('div')({
  flexGrow: 1,

  [`${media.medium}`]: {
    display: 'flex',
    justifyContent: 'center',
  },
});

const GridContentsDiv = styled('div')({});

const TooltipTitle = styled(Container)({
  fontSize: '0.8rem',
});

const CabinetStatusValue = styled('div')({
  minWidth: '3.5vw',
});

const CabinetStatusTooltip = styled(Tooltip)({
  fontSize: '1rem',

  [`${media.medium}`]: {
    flexGrow: 1,
  },
});

const SelectButton = styled(Button)({
  color: 'white',
  width: '7.5vw',
  backgroundColor: 'black',

  [`${media.medium}`]: {
    padding: '0.5vh 5vw',
    width: 'auto',
  },
});

const AvailableCabinetButton = styled(Button)({
  border: '3px solid #00d145',
  fontFamily: 'Anton',
  width: '5.5vw',
  textAlign: 'center',
  fontSize: '1vw',
  color: 'rgb(30,30,30)',
  height: '5.5vh',

  '&:hover': {
    backgroundColor: '#00d145',
    color: 'white',
  },
  '&:active': {
    backgroundColor: '#00d145',
    color: 'white',
  },
  '&:target': {
    backgroundColor: '#00d145',
    color: 'white',
  },
  '&:focus': {
    backgroundColor: '#00d145',
    color: 'white',
  },

  [`${media.medium}`]: {
    padding: '0.6rem',
    margin: '0.5vh 0.7vw',
    minWidth: '1.5vw',
    outline: 'none',
    maxHeight: '1.5vw',
    fontSize: '0.5rem',
    borderRadius: '5px',
    border: '2px solid #00d145',
  },
});

const RegisteredCabinetButton = styled(Button)({
  fontFamily: 'Anton',
  border: '3px solid lightgray',
  width: '5.5vw',
  color: 'gray',
  fontWeight: 'bold',
  fontSize: '1vw',
  backgroundColor: 'lightgray',
  cursor: 'default',
  height: '5.5vh',

  '&:hover': {
    backgroundColor: 'lightgray',
  },

  [`${media.medium}`]: {
    padding: '0.6rem',
    margin: '0.5vh 0.7vw',
    minWidth: '1.5vw',
    outline: 'none',
    maxHeight: '1.5vw',
    fontSize: '0.5rem',
    borderRadius: '5px',
    border: '2px solid lightgray',
  },
});

const BrokenCabinetButton = styled(Button)({
  fontFamily: 'Anton',
  border: '3px solid lightgray',
  width: '5.5vw',
  color: 'white',
  fontWeight: 'bold',
  fontSize: '1vw',
  backgroundColor: 'lightgray',
  height: '5.5vh',

  [`${media.medium}`]: {
    padding: '0.6rem',
    margin: '0.5vh 0.7vw',
    minWidth: '1.5vw',
    outline: 'none',
    maxHeight: '1.5vw',
    fontSize: '0.5rem',
    borderRadius: '5px',
    border: '2px solid lightgray',
  },
});

const MyCabinetButton = styled(Button)({
  fontFamily: 'Anton',
  border: '3px solid #008000',
  width: '5.5vw',
  fontWeight: 'bold',
  fontSize: '1vw',
  backgroundColor: '#008000',
  height: '5.5vh',

  '&:hover': {
    backgroundColor: '#DF1840',
    color: 'white',
    border: '3px solid #DF1840',
  },
  '&:focus': {
    backgroundColor: '#DF1840',
    color: 'white',
    border: '3px solid #DF1840',
  },

  [`${media.medium}`]: {
    padding: '0.6rem',
    margin: '0.5vh 0.7vw',
    minWidth: '1.5vw',
    maxHeight: '1.5vw',
    outline: 'none',
    fontSize: '0.5rem',
    borderRadius: '5px',
    border: '2px solid #008000',
  },
});
