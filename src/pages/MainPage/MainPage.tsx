import React, { useState } from 'react';
import Header from '../../Components/Header';
import HelperButton from '../../Components/HelperButton';
import HelperModal from '../../Components/HelperModal';
import MenuInfo from '../../Components/MenuInfo';
import Cabinet from '../../Components/Cabinet';
import { Redirect } from 'react-router-dom';
import { useObject } from '../../hooks/useObject';
import { auth, database } from '../../config/firebase.config';
import useAuthState from '../../hooks/useAuthState';
import AppLayout from '../../Components/AppLayout';

export type MainPageProps = {};

function MainPage({}: MainPageProps) {
  const [user, authLoading, authError] = useAuthState(auth);
  const [userInfo, userInfoLoading, userInfoError] = useObject(
    database.ref(`users/${user?.uid}`),
  );
  const [openModal, setOpenModal] = useState<boolean>(false);
  const handleOpen = () => {
    setOpenModal(!openModal);
  };

  if (authLoading || userInfoLoading) {
    return <div>로딩중...</div>;
  }

  if (!user) {
    return <Redirect to="/login" />;
  }

  return (
    <AppLayout>
      <Header>
        <HelperButton onClick={handleOpen} />
        <MenuInfo name={userInfo?.val().name} />
      </Header>
      <Cabinet />
      <HelperModal open={openModal} setOpen={handleOpen} />
    </AppLayout>
  );
}

export default MainPage;
