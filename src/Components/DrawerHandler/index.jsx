import { SwipeableDrawer } from '@material-ui/core';
import React from 'react';
import { Default, Mobile } from '../../MediaQuery';
import { DrawerImageContainer, MobileDrawerImageContainer } from './styles';

const DrawerHandler = (props) => {
  const { _map, visibleMap, mapImage, cabinetImage } = props;
  return (
    <>
      <Default>
        <SwipeableDrawer
          anchor="top"
          open={_map}
          onClick={() => visibleMap(false)}
        >
          <DrawerImageContainer>
            <img
              src={mapImage}
              alt="map"
              width="50%"
              style={{ backgroundColor: 'white' }}
            />
            <img
              src={cabinetImage}
              alt="cabinetpicture"
              width="30%"
              style={{ padding: '1rem', backgroundColor: 'white' }}
            />
          </DrawerImageContainer>
        </SwipeableDrawer>
      </Default>
      <Mobile>
        <SwipeableDrawer
          anchor="top"
          open={_map}
          onClick={() => visibleMap(false)}
        >
          <MobileDrawerImageContainer>
            <img
              src={mapImage}
              alt="map"
              width="90%"
              style={{ backgroundColor: 'white' }}
            />
            <img
              src={cabinetImage}
              alt="cabinetpicture"
              width="90%"
              style={{
                margin: '5vh 0',
                padding: '0.1rem',
                backgroundColor: 'white',
              }}
            />
          </MobileDrawerImageContainer>
        </SwipeableDrawer>
      </Mobile>
    </>
  );
};

export default DrawerHandler;
