const { auth } = require('../../configs/firebase.config');

const logOutUser = (history) => {
  auth
    .signOut()
    .then(() => {
      history.push('/');
    })
    .catch((error) => {
      console.error(error);
    });
};

export default logOutUser;
