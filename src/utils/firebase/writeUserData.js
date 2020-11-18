import { database } from '../../configs/firebase.config';

const writeUserData = (userId, name, studentID, cabinetTitle, cabinetIdx) => {
  database.ref(`users/${userId}`).set({
    name,
    studentID,
    cabinetTitle,
    cabinetIdx,
    adminType: false,
  });
};

export default writeUserData;
