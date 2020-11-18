import { setCurrentServer } from '../../redux/server/server.reducer';

const { database } = require('../../configs/firebase.config');

const getServerData = (dispatch) => {
  database.ref(`server`).on('value', (snapshot) => {
    dispatch(
      setCurrentServer({
        status: snapshot.val().status,
      }),
    );
  });
};

export default getServerData;
