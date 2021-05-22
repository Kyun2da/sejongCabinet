import React from 'react';
import { styled } from '@material-ui/core/styles';
import { Redirect, useHistory } from 'react-router-dom';
import { Button, Container, TextField } from '@material-ui/core';
import { Controller, useForm } from 'react-hook-form';
import customSwal from '../../utils/alert';

export type UserPageProps = {};

function UserPage({}: UserPageProps) {
  return (
    <PageContainer>
      <TempHeader>임시 헤더 (10vh)</TempHeader>
      <UserPageContainer>
        <UserPageTitle>나의 사물함</UserPageTitle>
        <ContentsContainer> </ContentsContainer>
        <ContentsContainer> </ContentsContainer>
      </UserPageContainer>
    </PageContainer>
  );
}

const TempHeader = styled(Container)({
  position: 'absolute',
  width: '100vh',
  height: '10vh',
  backgroundColor: 'black',
  color: 'white',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  fontSize: '2rem',
});

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
  top: '15vh',
  width: '40vw',
  height: '75vh',
  padding: '2vh 0',
  columnGap: '2vh',
});

const ContentsContainer = styled(Container)({
  flexGrow: 1,
  width: '80%',
});

const UserPageTitle = styled('p')({
  fontSize: '1.5vw',
  fontWeight: 'bold',
  padding: '1vh 0 2vh',
  borderBottom: '1px solid RGB(200, 200, 200)',
  textAlign: 'center',
});

export default UserPage;
