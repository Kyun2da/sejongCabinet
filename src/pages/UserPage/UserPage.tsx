import React from 'react';
import { styled } from '@material-ui/core/styles';
import { Button, Container } from '@material-ui/core';
import {
  useAppSelector,
  useCabinetSelector,
  useUserSelector,
} from '../../redux/hooks';
import Header from '../../Components/Header';
import media from '../../lib/styles/media';
import PasswordChangeForm from '../../Components/PasswordChangeForm';

export type UserPageProps = {};

function UserPage({}: UserPageProps) {
  const { cabinetTitle, cabinetIdx } = useAppSelector(useUserSelector);
  const { cabinet } = useAppSelector(useCabinetSelector);
  return (
    <PageContainer>
      <Header />
      <UserPageContainer>
        <UserPageContents>
          <UserPageTitle>나의 사물함</UserPageTitle>
          <MyCabinetContents>
            <MyCabinet>
              {cabinetTitle && cabinetIdx && cabinet ? (
                `${cabinet[cabinetTitle].title}
                 -
                    ${cabinetIdx + 1}번 사물함`
              ) : (
                <NoCabinet>예약된 사물함이 없습니다.</NoCabinet>
              )}
            </MyCabinet>
            {cabinetTitle ? <CancleButton>취소</CancleButton> : null}
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

  [`${media.medium}`]: { marginBottom: '0' },
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
