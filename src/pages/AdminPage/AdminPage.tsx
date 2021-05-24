import React, { useState, useEffect } from 'react';
import { styled } from '@material-ui/core/styles';
import { Redirect, useHistory } from 'react-router-dom';
import { Button, Container } from '@material-ui/core';
import { useAppSelector } from '../../redux/hooks';
import Header from '../../Components/Header';
import media from '../../lib/styles/media';
import PasswordChangeForm from '../../Components/PasswordChangeForm';
import { auth, database } from '../../config/firebase.config';
import { useAppDispatch } from '../../redux/hooks';
import { setServerStatus } from '../../redux/server/serverSlice';

export type AdminPageProps = {};

function UserPage({}: AdminPageProps) {
  const cabinetTitle = useAppSelector((state) => state.users.cabinetTitle);
  const cabinetIdx = useAppSelector((state) => state.users.cabinetIdx);
  let serverStatus = useAppSelector((state) => state.server.status);

  const [total, setTotal] = useState(0);

  const dispatch = useAppDispatch();

  const onClickServerChange = () => {
    if (serverStatus === 0) {
      database.ref(`server`).set({
        status: 1,
      });
    } else if (serverStatus === 1) {
      database.ref(`server`).set({
        status: 0,
      });
    }
  };

  return (
    <PageContainer>
      <Header />
      <UserPageContainer>
        <UserPageContents>
          <UserPageTitle>관리자 페이지</UserPageTitle>
          <MyCabinetContents>
            <MyCabinet>현재 예약된 사물함 : {total}개</MyCabinet>
            <CancleButton onClick={onClickServerChange}>
              {serverStatus ? '서버 열기' : '서버 닫기'}
            </CancleButton>
          </MyCabinetContents>
        </UserPageContents>
        <UserPageContents>
          <UserPageTitle>비밀번호 변경</UserPageTitle>
          <PasswordChangeForm />
        </UserPageContents>
      </UserPageContainer>
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

const UserPageContainer = styled(Container)({
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

const UserPageTitle = styled(Container)({
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

const UserPageContents = styled(Container)({
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

export default UserPage;
