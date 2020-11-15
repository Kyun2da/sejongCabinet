import { setCurrentUserNameAndID } from '../../redux/auth/auth.reducer';

const { database } = require('../../configs/firebase.config');

const getUserData = (userId, dispatch) => {
  database.ref(`users/${userId}`).on('value', (snapshot) => {
    dispatch(
      setCurrentUserNameAndID({
        studentId: snapshot.val().studentID,
        name: snapshot.val().name,
      }),
    );
  });
};

export default getUserData;
