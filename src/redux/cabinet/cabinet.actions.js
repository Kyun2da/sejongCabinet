import cabinetTypes from './cabinet.types';

const setCurrentCabinets = (cabinets) => {
  return {
    type: cabinetTypes.SET_CURRENT_CABINETS,
    payload: cabinets,
  };
};

export default setCurrentCabinets;
