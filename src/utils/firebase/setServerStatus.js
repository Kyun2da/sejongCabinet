import { database } from '../../configs/firebase.config';

const toggleServerStatus = () => {
  database.ref(`server/`).once('value', (snapshot) => {
    const { status } = snapshot.val();
    if (status) {
      return database.ref(`server`).set({
        status: false,
      });
    }
    return database.ref(`server`).set({
      status: true,
    });
  });
};

export default toggleServerStatus;
