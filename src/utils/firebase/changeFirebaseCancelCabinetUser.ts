import { database } from '../../config/firebase.config';
import { serverStatusType } from '../../redux/server/serverSlice';

const changeFirebaseCancelCabinetUser = (uuid: string) => {
  const postData = {
    cabinetIdx: 0,
    cabinetTitle: 0,
  };
  return database.ref(`/users/${uuid}`).update(postData);
};

export default changeFirebaseCancelCabinetUser;
