import { database } from '../../config/firebase.config';

const changeServerStatus = (serverStatus: number | undefined) => {
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

export default changeServerStatus;
