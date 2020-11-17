import { database } from '../../configs/firebase.config';

const writeUserData = (userId, name, studentID, cabinetIdx, cabinetTitle) => {
  database.ref(`users/${userId}`).set({
    name,
    studentID,
    cabinetIdx,
    cabinetTitle,
  });
};

export default writeUserData;
