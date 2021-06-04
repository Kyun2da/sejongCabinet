import React, { useState } from 'react';
import Header from '../../Components/Header';
import HelperButton from '../../Components/HelperButton';
import HelperModal from '../../Components/HelperModal';
import MenuInfo from '../../Components/MenuInfo';
import AppLayout from '../../Components/AppLayout';
import Cabinet from '../../Components/Cabinet';
import { Redirect } from 'react-router-dom';
import { useAppSelector, useUserSelector } from '../../redux/hooks';
import ServerStatusIcon from '../../Components/ServerStatusIcon';

export type MainPageProps = {};

function MainPage({}: MainPageProps) {
  const [openModal, setOpenModal] = useState<boolean>(false);
  const { uuid } = useAppSelector(useUserSelector);
  const handleOpen = () => {
    setOpenModal(!openModal);
  };

  if (!uuid) {
    return <Redirect to="/login" />;
  }

  return (
    <AppLayout>
      <Header>
        <HelperButton onClick={handleOpen} />
        <ServerStatusIcon />
        <MenuInfo />
      </Header>
      <Cabinet />
      <HelperModal open={openModal} setOpen={handleOpen} />
    </AppLayout>
  );
}

export default MainPage;
