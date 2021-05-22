import React, { useState } from 'react';
import Header from '../../Components/Header';
import HelperButton from '../../Components/HelperButton';
import HelperModal from '../../Components/HelperModal';
import { useAppSelector } from '../../redux/hooks';

export type MainPageProps = {};

function MainPage({}: MainPageProps) {
  const uuid = useAppSelector((state) => state.users.uuid);
  const [openModal, setOpenModal] = useState<boolean>(false);
  const handleOpen = () => {
    setOpenModal(!openModal);
  };

  return (
    <>
      <Header>
        <HelperButton onClick={handleOpen} />
      </Header>
      {uuid}
      <HelperModal open={openModal} setOpen={handleOpen} />
    </>
  );
}

export default MainPage;
