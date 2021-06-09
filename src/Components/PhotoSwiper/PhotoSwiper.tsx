import { SwipeableDrawer } from '@material-ui/core';
import { useEffect, useState } from 'react';
import { storage } from '../../config/firebase.config';
import useDownloadURL from '../../hooks/useDownloadURL';
import cabinetNoImage1 from '../../images/cabinetNoImage1.png';
import cabinetNoImage2 from '../../images/cabinetNoImage2.png';
import { useAppSelector, useCabinetSelector } from '../../redux/hooks';

type PhotoSwiperProps = {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  index: number;
};

export default function PhotoSwiper({
  open,
  setOpen,
  index,
}: PhotoSwiperProps) {
  const { cabinet } = useAppSelector(useCabinetSelector);
  const [url1, setUrl1] = useState('');
  const [url2, setUrl2] = useState('');

  useEffect(() => {
    const idxArr: number[] = [];
    cabinet?.map((item, index: number) => idxArr.push(index));
    storage
      .ref(`/${idxArr[index]}/position`)
      .getDownloadURL()
      .then((url: string) => setUrl1(url))
      .catch((e) => setUrl1(''));
    storage
      .ref(`/${idxArr[index]}/real`)
      .getDownloadURL()
      .then((url: string) => setUrl2(url))
      .catch((e) => setUrl2(''));
  }, [index]);
  return (
    <SwipeableDrawer
      anchor="top"
      open={open}
      onClick={() => setOpen(false)}
      onClose={() => {}}
      onOpen={() => {}}
    >
      <div
        style={{
          display: 'flex',
          width: '100%',
          flexDirection: 'row',
          justifyContent: 'space-evenly',
          alignItems: 'center',
          padding: '10vh 0',
          backgroundColor: 'rgb(240,240,240)',
        }}
      >
        <img
          src={url1 || cabinetNoImage2}
          alt="map"
          width="50%"
          style={{ backgroundColor: 'white' }}
        />
        <img
          src={url2 || cabinetNoImage1}
          alt="cabinetpicture"
          width="30%"
          style={{ padding: '1rem', backgroundColor: 'white' }}
        />
      </div>
    </SwipeableDrawer>
  );
}
