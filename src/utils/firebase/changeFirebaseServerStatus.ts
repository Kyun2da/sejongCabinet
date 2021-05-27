import { database } from '../../config/firebase.config';
import { serverStatusType } from '../../redux/server/serverSlice';

const changeFirebaseServerStatus = (serverStatus: serverStatusType) => {
  if (serverStatus === 0) {
    return database.ref(`server`).set({
      status: 1,
    });
  } else if (serverStatus === 1) {
    return database.ref(`server`).set({
      status: 0,
    });
  }
};

export default changeFirebaseServerStatus;
