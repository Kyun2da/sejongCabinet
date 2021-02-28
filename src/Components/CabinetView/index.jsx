import React from 'react';
import { useSelector } from 'react-redux';
import SwipeableViews from 'react-swipeable-views';
import Cabinet from '../../Pages/Cabinet';

const CabinetView = (props) => {
  const {
    index,
    handleChangeIndex,
    cabinetNames,
    select,
    setSelect,
    cabinetEnroll,
    currentUserID,
    cabinetCancel,
    adminType,
    cabinetBreakDown,
    cabinetFix,
  } = props;
  const data = useSelector((state) => state.cabinet.currentCabinets);
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
      {cabinetNames.map((i) => {
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
      })}
    </SwipeableViews>
  );
};

export default CabinetView;
