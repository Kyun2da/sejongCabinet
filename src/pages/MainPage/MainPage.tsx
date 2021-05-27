import React, { useState } from 'react';
import Header from '../../Components/Header';
import HelperButton from '../../Components/HelperButton';
import HelperModal from '../../Components/HelperModal';
import MenuInfo from '../../Components/MenuInfo';
import AppLayout from '../../Components/AppLayout';
import Cabinet from '../../Components/Cabinet';
import { useAppSelector, useUserSelector } from '../../redux/hooks';

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
        <MenuInfo />
      </Header>
      <Cabinet />
      <HelperModal open={openModal} setOpen={handleOpen} />
    </AppLayout>
  );
}

export default MainPage;
