import { clearCurrentUser } from '../../redux/auth/auth.reducer';

const { auth } = require('../../configs/firebase.config');

const logOutUser = (history) => {
  auth
    .signOut()
    .then(() => {
      clearCurrentUser();
      history.push('/');
    })
    .catch((error) => {
      console.error(error);
    });
};

export default logOutUser;
