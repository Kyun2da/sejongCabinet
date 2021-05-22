import React, { useCallback, useEffect } from 'react';
import { styled } from '@material-ui/core/styles';
import { Redirect, useHistory } from 'react-router-dom';
import { Button, Container, TextField } from '@material-ui/core';
import { Controller, useForm } from 'react-hook-form';
import Header from '../../Components/Header';
import customSwal from '../../utils/alert';
import media from '../../lib/styles/media';

type PasswordChangeInputs = {
  currentPassword: string;
  changePassword: string;
  confirmPassword: string;
};

export type UserPageProps = {};

function UserPage({}: UserPageProps) {
  const { handleSubmit, control, reset, formState, getValues } =
    useForm<PasswordChangeInputs>();

  const onSubmit = useCallback(async (data: PasswordChangeInputs) => {
    await alert(data);
  }, []);

  return (
    <PageContainer>
      <Header />
      <UserPageContainer>
        <UserPageContents>
          <UserPageTitle>나의 사물함</UserPageTitle>
          <MyCabinetContents>
            <MyCabinet>사물함 위치 : 0번 사물함</MyCabinet>
            <CancleButton>취소</CancleButton>
          </MyCabinetContents>
        </UserPageContents>
        <UserPageContents>
          <UserPageTitle>비밀번호 변경</UserPageTitle>
          <PasswordChangeForm
            onSubmit={handleSubmit(onSubmit)}
            noValidate
            name="passwordChange"
            autoComplete="off"
          >
            <Controller
              name="currentPassword"
              control={control}
              defaultValue=""
              rules={{ required: true, minLength: 6 }}
              render={({
                field: { onChange, value },
                fieldState: { error },
              }) => (
                <PasswordChangeTextfield
                  label="현재 비밀번호"
                  variant="outlined"
                  onChange={onChange}
                  value={value}
                  error={!!error}
                  helperText={error ? '현재 비밀번호를 입력해주세요' : null}
                />
              )}
            />
            <Controller
              name="changePassword"
              control={control}
              defaultValue=""
              rules={{ required: true, minLength: 6 }}
              render={({
                field: { onChange, value },
                fieldState: { error },
              }) => (
                <PasswordChangeTextfield
                  label="변경 비밀번호"
                  variant="outlined"
                  onChange={onChange}
                  value={value}
                  error={!!error}
                  helperText={
                    error ? '6글자 이상의 비밀번호를 입력해주세요' : null
                  }
                />
              )}
            />
            <Controller
              name="confirmPassword"
              control={control}
              defaultValue=""
              rules={{ required: true, minLength: 6 }}
              render={({
                field: { onChange, value },
                fieldState: { error },
              }) => (
                <PasswordChangeTextfield
                  label="비밀번호 확인"
                  variant="outlined"
                  onChange={onChange}
                  value={value}
                  error={!!error}
                  helperText={error ? '비밀번호가 일치하지 않습니다.' : null}
                />
              )}
            />
            <PasswordChangeButton variant="contained" type="submit">
              변경하기
            </PasswordChangeButton>
          </PasswordChangeForm>
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
  height: '80vh',

  [`${media.medium}`]: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    border: '5px solid lightgray',
    borderRadius: '6vw',
    padding: '2vh 0 3vh',
    height: 'auto',
    width: '85%',
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
    margin: '1vh 0 3vh',
  },
});

const PasswordChangeForm = styled('form')({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  flexDirection: 'column',
  marginTop: '1vh',
  width: '100%',
});

const PasswordChangeTextfield = styled(TextField)({
  width: '25vw',
  margin: '1.5vh 0',

  [`${media.medium}`]: {
    width: '60vw',
    height: '7vh',
  },
});

const PasswordChangeButton = styled(Button)({
  backgroundColor: 'rgb(63,81,181)',
  fontWeight: 'bold',
  color: 'white',
  width: '25vw',
  height: '6vh',
  borderRadius: '0.5vw',
  margin: '1vh 0',
  '&:hover': {
    backgroundColor: '#2036b1',
  },

  [`${media.medium}`]: {
    width: '60vw',
    borderRadius: '0.5rem',
  },
});

export default UserPage;
