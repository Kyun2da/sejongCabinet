import React, { useState } from 'react';
import { styled } from '@material-ui/core/styles';
import { Button, Container } from '@material-ui/core';
import { useAppSelector, useServerSelector } from '../../redux/hooks';
import Header from '../../Components/Header';
import media from '../../lib/styles/media';
import PasswordChangeForm from '../../Components/PasswordChangeForm';
import changeFirebaseServerStatus from '../../utils/firebase/changeFirebaseServerStatus';

export type AdminPageProps = {};

function AdminPage({}: AdminPageProps) {
  const { status } = useAppSelector(useServerSelector);
  const [total, setTotal] = useState(0);

  return (
    <PageContainer>
      <Header />
      <AdminPageContainer>
        <AdminPageContents>
          <AdminPageTitle>관리자 페이지</AdminPageTitle>
          <MyCabinetContents>
            <MyCabinet>현재 예약된 사물함 : {total}개</MyCabinet>
            <CancleButton onClick={() => changeFirebaseServerStatus(status)}>
              {status ? '서버 열기' : '서버 닫기'}
            </CancleButton>
          </MyCabinetContents>
        </AdminPageContents>
        <AdminPageContents>
          <AdminPageTitle>비밀번호 변경</AdminPageTitle>
          <PasswordChangeForm />
        </AdminPageContents>
      </AdminPageContainer>
    </PageContainer>
  );
}

const PageContainer = styled(Container)({
  display: 'flex',
  alignItems: 'center',
  flexDirection: 'column',
  minWidth: '100%',
  height: '100vh',
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

const CancleButton = styled(Button)({
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

const MyCabinet = styled('div')({
  fontFamily: 'Noto Sans KR',
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

const NoCabinet = styled(Container)({
  height: '10vh',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',

  [`${media.medium}`]: {
    height: '14vh',
  },
});

export default AdminPage;
