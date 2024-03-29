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
  useCabinetSelector,
  useUserSelector,
  useServerSelector,
  useDescriptionSelector,
} from '../../redux/hooks';
import { setUserInfo } from '../../redux/user/userSlice';
import media from '../../lib/styles/media';
import changeCabinetStatus from '../../utils/firebase/changeCabinetStatus';
import applyForCabinet from '../../utils/firebase/applyForCabinet';
import AppLayout from '../AppLayout';
import Swal from 'sweetalert2';
import customSwal from '../../utils/alert';
import type {
  CabinetTabType,
  CabinetItemType,
} from '../../redux/cabinet/cabinetSlice';
import changeFirebaseCancelCabinetUser from '../../utils/firebase/changeFirebaseCancelCabinetUser';
import { useMediaQuery } from 'react-responsive';
import { setDescriptionMode } from '../../redux/description/descriptionSlice';

export type CabinetData = {
  index: number;
  data: CabinetTabType;
};

export default function CabinetButtons({
  data: { title, width, height, item },
  index,
}: CabinetData) {
  const { descriptionMode } = useAppSelector(useDescriptionSelector);
  const [select, setSelect] = useState(-1);
  const [count, setCount] = useState([0, 0, 0]);
  const { cabinet } = useAppSelector(useCabinetSelector);
  const { status } = useAppSelector(useServerSelector);
  const { uuid, adminType, studentID, name, cabinetIdx, cabinetTitle } =
    useAppSelector(useUserSelector);
  const cabinetRef = useRef<HTMLDivElement>(null);
  const submitRef = useRef<HTMLDivElement>(null);
  const dispatch = useAppDispatch();

  const isMobileAndTablet = useMediaQuery({
    query: '(max-width:1023px)',
  });

  const showButtonText = () => {
    if (select === -1) {
      if (adminType !== 1 && status === 1)
        return '서버가 닫혀있으므로 현재는 사물함 신청이 불가능합니다';
      return '사물함을 선택해주세요';
    }

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

  const onClickCabinetButton = (e: React.MouseEvent, idx: number) => {
    const target = e.currentTarget as HTMLElement;

    if (
      !adminType &&
      item[idx].status === 0 &&
      typeof cabinetIdx === 'number'
    ) {
      target.blur();
      if (cabinet && cabinetTitle)
        Swal.fire({
          icon: 'error',
          title: '이미 신청한 사물함이 있습니다.',
          text: `${cabinet[cabinetTitle].title}의 ${
            cabinetIdx + 1
          }번째 사물함의 신청을 취소하시겠습니까?`,
          showDenyButton: true,
          showCancelButton: true,
          showConfirmButton: false,
          denyButtonText: `네`,
          cancelButtonText: '아니요',
        }).then((result) => {
          if (result.isDenied) {
            if (cabinetTitle)
              changeFirebaseCancelCabinetUser(cabinetTitle, cabinetIdx, uuid);
            setSelect(idx);

            return setTimeout(() => target.focus(), 300);
          }

          return setSelect(-1);
        });
    } else {
      return setSelect(idx);
    }
  };

  const onClickSubmitButton = () => {
    if (adminType === 0) {
      if (item[select].status === 0) {
        if (cabinet)
          Swal.fire({
            icon: 'warning',
            title: '사물함 신청',
            text: `${cabinet[index].title}의 ${
              select + 1
            }번째 사물함을 신청하시겠습니까?`,
            showCancelButton: true,
            showConfirmButton: true,
            confirmButtonText: '네',
            cancelButtonText: '아니요',
            confirmButtonColor: 'rgb(63,81,181)',
          }).then((result) => {
            if (result.isConfirmed) {
              if (uuid && name && studentID)
                applyForCabinet(index, select, {
                  status: 1,
                  uuid,
                  name,
                  studentID,
                });
            } else {
              setSelect(select);
            }
          });
      } else if (item[select].uuid === uuid) {
        if (cabinet)
          Swal.fire({
            icon: 'error',
            title: '사물함을 취소하시겠습니까?',
            text: `${cabinet[index].title}의 ${
              select + 1
            }번째 사물함의 신청을 취소하시겠습니까?`,
            showCancelButton: true,
            showConfirmButton: true,
            confirmButtonText: '네',
            cancelButtonText: '아니요',
            confirmButtonColor: 'rgb(63,81,181)',
          }).then((result) => {
            if (result.isConfirmed) {
              changeFirebaseCancelCabinetUser(index, select, uuid);
            }
          });
      }
    } else {
      if (item[select].status === 0) {
        changeCabinetStatus(index, select, 2);
      } else if (item[select].status === 1) {
        Swal.fire({
          icon: 'error',
          title: '사물함을 취소하시겠습니까?',
          text: `${item[select].name}님의 사물함을 취소하시겠습니까?`,
          showCancelButton: true,
          showConfirmButton: true,
          confirmButtonText: '네',
          cancelButtonText: '아니요',
          confirmButtonColor: 'rgb(63,81,181)',
        }).then((result) => {
          if (result.isConfirmed) {
            changeFirebaseCancelCabinetUser(index, select, item[select].uuid);
          }
        });
      } else if (item[select].status === 2) {
        changeCabinetStatus(index, select, 0);
      }
    }
  };

  useEffect(() => {
    const newCount = [0, 0, 0];
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

  const handledescriptionMode = (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    dispatch(setDescriptionMode(event.target.value));
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
      return item[idx].studentID;
    } else {
      return item[idx].name;
    }
  };

  const loadCabinetButton = (idx: number) => {
    if (item[idx].status === 0) {
      return (
        <AvailableCabinetButton
          onClick={(e) => {
            onClickCabinetButton(e, idx);
          }}
          disabled={adminType !== 1 && status === 1}
          key={title + idx}
        >
          {idx + 1}
        </AvailableCabinetButton>
      );
    } else if (item[idx].status === 1 && item[idx].uuid === uuid) {
      return (
        <MyCabinetButton
          onClick={(e) => onClickCabinetButton(e, idx)}
          disabled={adminType !== 1 && status === 1}
          key={title + idx}
        >
          {descriptionCabinet(idx)}
        </MyCabinetButton>
      );
    } else if (item[idx].status === 1) {
      return (
        <RegisteredCabinetButton
          disabled={adminType !== 1}
          onClick={(e) => onClickCabinetButton(e, idx)}
          key={title + idx}
        >
          {descriptionCabinet(idx)}
        </RegisteredCabinetButton>
      );
    } else if (item[idx].status === 2) {
      return (
        <BrokenCabinetButton
          onClick={(e) => onClickCabinetButton(e, idx)}
          disabled={adminType !== 1}
          key={title + idx}
        >
          🚧
        </BrokenCabinetButton>
      );
    }
  };

  const loadGridRow = (i: number) => {
    return [...Array(width)].map((v, index) => {
      const arrIdx = i * width + index;

      if (isMobileAndTablet) {
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
                onChange={handledescriptionMode}
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
                onChange={handledescriptionMode}
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
                onChange={handledescriptionMode}
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
          {isMobileAndTablet && select === -1
            ? null
            : adminType !== 1 && status === 1
            ? null
            : select === -1
            ? '-'
            : select + 1}
        </SelectIdxContainer>
        <SelectStatusContainer ref={submitRef}>
          <SelectButton onClick={onClickSubmitButton} disabled={select === -1}>
            {showButtonText()}
          </SelectButton>
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
  marginTop: '1vh',

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
    alignItems: 'center',
  },
});

const GridContentsDiv = styled('div')({
  width: '90%',
});

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
    fontSize: '0.9rem',
  },

  [`${media.fold}`]: {
    fontSize: '0.7rem',
  },
});

const SelectButton = styled(Button)({
  color: 'white',
  minWidth: '7.5vw',
  backgroundColor: 'black',
  transition: 'background-color 0.5s ease-in-out',

  '&:disabled': {
    backgroundColor: 'transparent',
    color: '#848484',
  },

  [`${media.medium}`]: {
    padding: '2vh 5vw',
    minHeight: '30px',
    width: 'auto',
    transition: 'none',

    '&:disabled': {
      fontSize: '0.4rem',
      textAlign: 'center',
      width: '80vw',
    },
  },
});

const AvailableCabinetButton = styled(Button)({
  border: '3px solid #34cf68',
  fontFamily: 'Anton',
  width: '5.5vw',
  textAlign: 'center',
  fontSize: '1vw',
  color: 'rgb(30,30,30)',
  height: '5.5vh',

  '&:hover': {
    backgroundColor: '#34cf68',
    border: '3px solid #34cf68',
    color: 'white',
  },
  '&:focus': {
    backgroundColor: '#03bd41',
    border: '3px solid #03bd41',
    color: 'white',
  },

  [`${media.medium}`]: {
    padding: '0.7rem',
    margin: '0.5vh 0.7vw',
    minWidth: '1.5vw',
    outline: 'none',
    maxHeight: '1.5vw',
    fontSize: '10px',
    borderRadius: '5px',
    border: '2px solid #34cf68',

    '&:hover': {
      backgroundColor: '#34cf68',
      border: '2px solid #34cf68',
      color: 'white',
    },
    '&:focus': {
      backgroundColor: '#03bd41',
      border: '2px solid #03bd41',
      color: 'white',
    },
  },

  [`${media.se}`]: {
    padding: '0.6rem',
  },

  [`${media.fold}`]: {
    padding: '0.55rem',
  },
});

const RegisteredCabinetButton = styled(Button)({
  fontFamily: 'Anton',
  border: '5px solid #707070',
  width: '5.5vw',
  color: '#f0f0f0',
  fontSize: '1vw',
  backgroundColor: '#707070',
  cursor: 'pointer',
  height: '5.5vh',

  '&:disabled': {
    color: '#f0f0f0',
  },

  '&:hover': {
    backgroundColor: '#505050',
    border: '3px solid #505050',
    color: 'white',
  },

  '&:focus': {
    backgroundColor: '#303030',
    border: '3px solid #303030',
    color: 'white',
  },

  [`${media.medium}`]: {
    padding: '0.7rem',
    margin: '0.5vh 0.7vw',
    minWidth: '1.5vw',
    outline: 'none',
    maxHeight: '1.5vw',
    fontSize: '10px',
    borderRadius: '5px',
    border: '2px solid #707070',

    '&:hover': {
      backgroundColor: '#505050',
      border: '2px solid #505050',
      color: 'white',
    },

    '&:focus': {
      backgroundColor: '#303030',
      border: '2px solid #303030',
      color: 'white',
    },
  },

  [`${media.se}`]: {
    padding: '0.6rem',
  },

  [`${media.fold}`]: {
    padding: '0.55rem',
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

  '&:hover': {
    backgroundColor: '#ecc14a',
    border: '3px solid #ecc14a',
    color: 'white',
  },

  '&:focus': {
    backgroundColor: '#eeb004',
    border: '3px solid #eeb004',
    color: 'white',
  },

  [`${media.medium}`]: {
    padding: '0.7rem',
    margin: '0.5vh 0.7vw',
    minWidth: '1.5vw',
    outline: 'none',
    maxHeight: '1.5vw',
    fontSize: '8px',
    borderRadius: '5px',
    border: '2px solid lightgray',

    '&:hover': {
      backgroundColor: '#ecc14a',
      border: '2px solid #ecc14a',
      color: 'white',
    },

    '&:focus': {
      backgroundColor: '#eeb004',
      border: '2px solid #eeb004',
      color: 'white',
    },
  },

  [`${media.se}`]: {
    padding: '0.6rem',
  },

  [`${media.fold}`]: {
    padding: '0.55rem',
  },
});

const MyCabinetButton = styled(Button)({
  fontFamily: 'Anton',
  border: '3px solid #008000',
  width: '5.5vw',
  fontSize: '1vw',
  backgroundColor: '#008000',
  height: '5.5vh',

  color: '#f0f0f0',

  '&:hover': {
    backgroundColor: '#db5872',
    color: 'white',
    border: '3px solid #db4563',
  },
  '&:focus': {
    backgroundColor: '#DF1840',
    color: 'white',
    border: '3px solid #DF1840',
  },

  [`${media.medium}`]: {
    padding: '0.7rem',
    margin: '0.5vh 0.7vw',
    minWidth: '1.5vw',
    maxHeight: '1.5vw',
    outline: 'none',
    fontSize: '10px',
    borderRadius: '5px',
    border: '2px solid #008000',

    '&:hover': {
      backgroundColor: '#db5872',
      color: 'white',
      border: '2px solid #db4563',
    },
    '&:focus': {
      backgroundColor: '#DF1840',
      color: 'white',
      border: '2px solid #DF1840',
    },
  },

  [`${media.se}`]: {
    padding: '0.6rem',
  },

  [`${media.fold}`]: {
    padding: '0.55rem',
  },
});
