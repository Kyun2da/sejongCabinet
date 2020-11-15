import { setCurrentCabinets } from '../../redux/cabinet/cabinet.reducer';

const { database } = require('../../configs/firebase.config');

const getCabinetData = (dispatch) => {
  database.ref(`cabinet`).on('value', (snapshot) => {
    dispatch(
      setCurrentCabinets({
        currentCabinets: snapshot.val(),
      }),
    );
  });
};

export default getCabinetData;
