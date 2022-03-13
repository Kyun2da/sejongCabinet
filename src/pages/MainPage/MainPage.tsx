import { useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import { Navigate } from 'react-router-dom';
import AppLayout from '../../Components/AppLayout';
import Cabinet from '../../Components/Cabinet';
import Header from '../../Components/Header';
import HelperButton from '../../Components/HelperButton';
import HelperModal from '../../Components/HelperModal';
import MenuInfo from '../../Components/MenuInfo';
import PhotoShowButton from '../../Components/PhotoShowButton';
import PhotoSwiper from '../../Components/PhotoSwiper';
import ServerStatusIcon from '../../Components/ServerStatusIcon';
import { useAppSelector, useUserSelector } from '../../redux/hooks';

function MainPage() {
  const [openModal, setOpenModal] = useState<boolean>(false);
  const [openSwiperPhoto, setOpenSwiperPhoto] = useState<boolean>(false);
  const { uuid } = useAppSelector(useUserSelector);
  const [index, setIndex] = useState(0);
  const handleOpen = () => {
    setOpenModal((tmp) => !tmp);
  };

  const showPhoto = () => {
    setOpenSwiperPhoto((tmp) => !tmp);
  };

  if (!uuid) {
    return <Navigate to="/login" />;
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
