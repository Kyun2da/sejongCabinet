import React, { useEffect, useState } from 'react';
import Header from '../../Components/Header';
import HelperButton from '../../Components/HelperButton';
import HelperModal from '../../Components/HelperModal';
import MenuInfo from '../../Components/MenuInfo';
import AppLayout from '../../Components/AppLayout';
import Cabinet from '../../Components/Cabinet';
import { Redirect } from 'react-router-dom';
import { useAppSelector, useUserSelector } from '../../redux/hooks';
import ServerStatusIcon from '../../Components/ServerStatusIcon';
import PhotoShowButton from '../../Components/PhotoShowButton';
import PhotoSwiper from '../../Components/PhotoSwiper';
import { useMediaQuery } from 'react-responsive';

export type MainPageProps = {};

function MainPage({}: MainPageProps) {
  const [openModal, setOpenModal] = useState<boolean>(false);
  const [openSwiperPhoto, setOpenSwiperPhoto] = useState<boolean>(false);
  const { uuid } = useAppSelector(useUserSelector);
  const [index, setIndex] = useState(0);
  const handleOpen = () => {
    setOpenModal((tmp) => !tmp);
  };

  useEffect(() => {
    console.log(index);
  }, [index]);
  const showPhoto = () => {
    setOpenSwiperPhoto((tmp) => !tmp);
  };

  if (!uuid) {
    return <Redirect to="/login" />;
  }

  const isMobile = useMediaQuery({
    query: '(max-width:767px)',
  });

  return (
    <AppLayout>
      <Header>
        {isMobile ? null : (
          <div>
            <HelperButton onClick={handleOpen} />
            <ServerStatusIcon />
          </div>
        )}
        <PhotoShowButton onClick={showPhoto} />
        <MenuInfo openHelpModal={handleOpen} />
      </Header>
      <Cabinet index={index} setIndex={setIndex} />
      <HelperModal open={openModal} setOpen={handleOpen} />
      <PhotoSwiper
        open={openSwiperPhoto}
        setOpen={setOpenSwiperPhoto}
        index={index}
      />
    </AppLayout>
  );
}

export default MainPage;
