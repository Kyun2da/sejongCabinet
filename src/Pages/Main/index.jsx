import React from 'react';
import SwipeableViews from 'react-swipeable-views';
import PropTypes from 'prop-types';
import Cabinet from '../Cabinet';
import { Default } from '../../MediaQuery';
import DrawerHandler from '../../Components/DrawerHandler';
import { MainContainer } from './styles';
import CabinetTab from '../../Components/Tab';

const MainPage = (props) => {
  const {
    data,
    _map,
    visibleMap,
    index,
    handleChange,
    handleChangeIndex,
    select,
    setSelect,
    cabinetNames,
    cabinetEnroll,
    currentUserID,
    cabinetCancel,
    adminType,
    cabinetBreakDown,
    cabinetFix,
    mapImage,
    cabinetImage,
  } = props;

  const LoadContents = () => {
    return cabinetNames.map((i) => {
      return (
        <Cabinet
          key={i}
          cabinetNum={i}
          data={data.currentCabinets[i]}
          select={select}
          setSelect={setSelect}
          cabinetEnroll={cabinetEnroll}
          currentUserID={currentUserID}
          cabinetCancel={cabinetCancel}
          adminType={adminType}
          cabinetBreakDown={cabinetBreakDown}
          cabinetFix={cabinetFix}
        />
      );
    });
  };

  const showContents = () => {
    return (
      <SwipeableViews
        index={index}
        onChangeIndex={handleChangeIndex}
        animateHeight
        style={{
          margin: '5vh 5vw',
          padding: '3vh 0 2vh 3vw',
          border: '0.5vh solid lightgray',
          borderRadius: '2vw',
        }}
      >
        {LoadContents()}
      </SwipeableViews>
    );
  };

  return (
    <div
      style={{ width: '100%', height: '100%' }}
      aria-hidden="true"
      onClick={() => setSelect(-1)}
    >
      <Default>
        <MainContainer>
          <DrawerHandler
            _map={_map}
            visibleMap={visibleMap}
            mapImage={mapImage}
            cabinetImage={cabinetImage}
          />
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              overflow: 'hidden',
              '&::-webkit-scrollbar': {
                display: 'none',
              },
            }}
          >
            <CabinetTab
              index={index}
              handleChange={handleChange}
              cabinetNames={cabinetNames}
            />
            {showContents()}
          </div>
        </MainContainer>
      </Default>
    </div>
  );
};

MainPage.propTypes = {
  data: PropTypes.objectOf(PropTypes.object).isRequired,
  index: PropTypes.number.isRequired,
  handleChange: PropTypes.func.isRequired,
  handleChangeIndex: PropTypes.func.isRequired,
  select: PropTypes.number.isRequired,
  setSelect: PropTypes.func.isRequired,
  _map: PropTypes.bool.isRequired,
  visibleMap: PropTypes.func.isRequired,
  cabinetNames: PropTypes.arrayOf(PropTypes.string).isRequired,
  cabinetEnroll: PropTypes.func.isRequired,
  currentUserID: PropTypes.string.isRequired,
  cabinetCancel: PropTypes.func.isRequired,
  adminType: PropTypes.bool.isRequired,
  cabinetBreakDown: PropTypes.func.isRequired,
  cabinetFix: PropTypes.func.isRequired,
  mapImage: PropTypes.string.isRequired,
  cabinetImage: PropTypes.string.isRequired,
};

export default MainPage;
