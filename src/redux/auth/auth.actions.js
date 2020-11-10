import authTypes from './auth.types';

const setCurrentUser = (user) => {
  return {
    type: authTypes.SET_CURRENT_USER,
    payload: user,
  };
};

export default setCurrentUser;
