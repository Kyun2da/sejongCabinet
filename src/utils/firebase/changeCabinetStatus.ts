import { database } from '../../config/firebase.config';

const changeCabinetStatus = (
  cabinetIndex: number,
  selectedCabinet: number,
  changeStatus: number,
) => {
  database.ref(`cabinet/${cabinetIndex}/item/${selectedCabinet}`).set({
    status: changeStatus,
  });
};

export default changeCabinetStatus;
