import React, { useState } from 'react';
import Header from '../../Components/Header';
import HelperButton from '../../Components/HelperButton';
import HelperModal from '../../Components/HelperModal';
import { Redirect } from 'react-router-dom';
import MenuInfo from '../../Components/MenuInfo';
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
    <>
      <Header>
        <HelperButton onClick={handleOpen} />
        <MenuInfo />
      </Header>
      <HelperModal open={openModal} setOpen={handleOpen} />
    </>
  );
}

export default MainPage;
