import { Button, Container } from '@material-ui/core';
import { styled } from '@material-ui/core/styles';
import { useEffect, useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import { Navigate } from 'react-router';
import Swal from 'sweetalert2';
import BackButton from '../../Components/BackButton';
import CabinetManageModal from '../../Components/CabinetManageModal';
import Header from '../../Components/Header';
import MenuInfo from '../../Components/MenuInfo';
import PasswordChangeForm from '../../Components/PasswordChangeForm';
import media from '../../lib/styles/media';
import type {
  CabinetItemType,
  CabinetTabType,
} from '../../redux/cabinet/cabinetSlice';
import {
  useAppSelector,
  useCabinetSelector,
  useServerSelector,
  useUserSelector,
} from '../../redux/hooks';
import changeFirebaseServerStatus from '../../utils/firebase/changeFirebaseServerStatus';

function AdminPage() {
  const { status } = useAppSelector(useServerSelector);
  const { uuid } = useAppSelector(useUserSelector);
  const { cabinet } = useAppSelector(useCabinetSelector);
  const [total, setTotal] = useState(0);
  const [open, setOpen] = useState(false);

  const isMobile = useMediaQuery({
    query: '(max-width:767px)',
  });

  useEffect(() => {
    let count = 0;
    cabinet?.forEach((value: CabinetTabType) =>
      value.item.forEach((i: CabinetItemType) => {
        if (i.status === 1) count++;
      }),
    );

    setTotal(count);
  }, []);

  const onClickSeverStatusButton = () => {
    if (status === 0) {
      Swal.fire({
        icon: 'warning',
        title: '서버를 닫으시겠습니까?',
        text: `서버를 닫게되면 유저들의 사물함 신청과 수정이 불가능해집니다.`,
        showCancelButton: true,
        showConfirmButton: true,
        confirmButtonText: '네',
        cancelButtonText: '아니요',
        confirmButtonColor: 'rgb(63,81,181)',
      }).then((result) => {
        if (result.isConfirmed) {
          changeFirebaseServerStatus(status);

          Swal.fire({
            icon: 'success',
            title: '성공적으로 서버를 닫았습니다',
            width: 'auto',
            timer: 1500,
          });
        }
      });
    } else {
      Swal.fire({
        icon: 'warning',
        title: '서버를 여시겠습니까?',
        text: `서버를 열게되면 유저들의 사물함 신청과 수정이 가능해집니다.`,
        showCancelButton: true,
        showConfirmButton: true,
        confirmButtonText: '네',
        cancelButtonText: '아니요',
        confirmButtonColor: 'rgb(63,81,181)',
      }).then((result) => {
        if (result.isConfirmed) {
          changeFirebaseServerStatus(status);

          Swal.fire({
            icon: 'success',
            title: '성공적으로 서버를 열었습니다',
            width: 'auto',
            timer: 1500,
          });
        }
      });
    }
  };

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  if (!uuid) {
    return <Navigate to="/login" />;
  }

  return (
    <PageContainer>
      <Header>
        <BackButton />
        <MenuInfo />
      </Header>
      <AdminPageContainer>
        <AdminPageContents>
          <AdminPageTitle>관리자 페이지</AdminPageTitle>
          <MyCabinetContents>
            <MyCabinet>현재 예약된 사물함 : {total}개</MyCabinet>
          </MyCabinetContents>
        </AdminPageContents>
        <AdminPageContents>
          <AdminPageTitle>관리자 기능</AdminPageTitle>
          <ButtonContainer>
            <CancelButton onClick={onClickSeverStatusButton}>
              {status ? '서버 열기' : '서버 닫기'}
            </CancelButton>
            {isMobile ? null : (
              <CabinetManageButton onClick={handleOpen}>
                사물함 관리
              </CabinetManageButton>
            )}
          </ButtonContainer>
        </AdminPageContents>
        <AdminPageContents>
          <AdminPageTitle>비밀번호 변경</AdminPageTitle>
          <PasswordChangeForm />
        </AdminPageContents>
      </AdminPageContainer>
      <CabinetManageModal open={open} handleClose={handleClose} />
    </PageContainer>
  );
}

const PageContainer = styled(Container)({
  display: 'flex',
  alignItems: 'center',
  flexDirection: 'column',
  minWidth: '100%',
  height: '100vh',
  marginBottom: '7vh',

  [`${media.medium}`]: { marginBottom: '0' },
});

const AdminPageContainer = styled(Container)({
  display: 'flex',
  position: 'absolute',
  flexDirection: 'column',
  alignItems: 'center',
  border: '3px solid lightgray',
  borderRadius: '2vw',
  top: '14vh',
  width: '40vw',
  minHeight: '75vh',
  paddingBottom: '5vh',

  [`${media.medium}`]: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    border: '5px solid lightgray',
    borderRadius: '6vw',
    padding: '2vh 0 3vh',
    height: 'auto',
    width: '85%',
    paddingBottom: '1vh',
  },
});

const MyCabinetContents = styled(Container)({
  alignItems: 'center',
  display: 'flex',
  marginTop: '3vh',
  fontSize: '3vh',
  flexDirection: 'column',

  [`${media.medium}`]: { marginTop: '1vh' },
});

const AdminPageTitle = styled(Container)({
  fontSize: '3vh',
  fontWeight: 'bold',
  padding: '1vh 0 2vh',
  borderBottom: '1px solid RGB(200, 200, 200)',
  textAlign: 'center',
  margin: '3vh 0 2vh',

  [`${media.medium}`]: { fontSize: '3vh', borderBottom: 'none', margin: '0' },
});

const CancelButton = styled(Button)({
  fontWeight: 'bold',
  backgroundColor: 'red',
  color: 'white',
  opacity: 0.6,
  padding: '0.5vh 1.5vw',
  marginTop: '3vh',
  fontFamily: 'Noto Sans KR',
  borderRadius: '0.5rem',
  '&:hover': {
    backgroundColor: 'red',
    opacity: 1,
  },

  [`${media.medium}`]: { padding: '0.5vh 5vw', marginTop: '3vh' },
});

const ButtonContainer = styled('div')({
  textAlign: 'center',
});

const CabinetManageButton = styled(Button)({
  fontWeight: 'bold',
  backgroundColor: 'rgb(63,81,181)',
  color: 'white',
  opacity: 0.6,
  padding: '0.5vh 1.5vw',
  margin: '3vh 0 0 2vw',
  fontFamily: 'Noto Sans KR',
  borderRadius: '0.5rem',
  '&:hover': {
    backgroundColor: '#2036b1',
    opacity: 1,
  },

  [`${media.medium}`]: { padding: '0.5vh 5vw', marginTop: '3vh' },
});

const MyCabinet = styled('div')({
  fontFamily: 'Noto Sans KR',
  fontSize: '1.5rem',
  [`${media.medium}`]: { fontSize: '2.5vh' },
});

const AdminPageContents = styled(Container)({
  height: 'auto',
  width: '80%',

  [`${media.medium}`]: {
    width: '90%',
    margin: '1vh 0 2vh',
  },
});

export default AdminPage;
