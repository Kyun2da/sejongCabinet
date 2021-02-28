import React from 'react';
import PropTypes from 'prop-types';
import { Default } from '../../MediaQuery';
import DrawerHandler from '../../Components/DrawerHandler';
import { MainContainer, TabCabinetWrapper } from './styles';
import CabinetTab from '../../Components/Tab';
import CabinetView from '../../Components/CabinetView';

const MainPage = (props) => {
  const {
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

  return (
    <Default>
      <MainContainer>
        <DrawerHandler
          _map={_map}
          visibleMap={visibleMap}
          mapImage={mapImage}
          cabinetImage={cabinetImage}
        />
        <TabCabinetWrapper>
          <CabinetTab
            index={index}
            handleChange={handleChange}
            cabinetNames={cabinetNames}
          />
          <CabinetView
            index={index}
            handleChangeIndex={handleChangeIndex}
            cabinetNames={cabinetNames}
            select={select}
            setSelect={setSelect}
            cabinetEnroll={cabinetEnroll}
            currentUserID={currentUserID}
            cabinetCancel={cabinetCancel}
            adminType={adminType}
            cabinetBreakDown={cabinetBreakDown}
            cabinetFix={cabinetFix}
          />
        </TabCabinetWrapper>
      </MainContainer>
    </Default>
  );
};

MainPage.propTypes = {
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
