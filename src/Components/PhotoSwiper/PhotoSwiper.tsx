import { SwipeableDrawer } from '@material-ui/core';

type PhotoSwiperProps = {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function PhotoSwiper({ open, setOpen }: PhotoSwiperProps) {
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
          // src={mapImage}
          alt="map"
          width="50%"
          style={{ backgroundColor: 'white' }}
        />
        <img
          // src={cabinetImage}
          alt="cabinetpicture"
          width="30%"
          style={{ padding: '1rem', backgroundColor: 'white' }}
        />
      </div>
    </SwipeableDrawer>
  );
}
