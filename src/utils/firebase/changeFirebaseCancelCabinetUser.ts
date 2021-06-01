import { database } from '../../config/firebase.config';
import { serverStatusType } from '../../redux/server/serverSlice';

const changeFirebaseCancelCabinetUser = (
  cabinetNum: number,
  index: number,
  uuid: string,
) => {
  const postData = {
    cabinetIdx: 0,
    cabinetTitle: 0,
  };
  database.ref(`/cabinet/${cabinetNum}/item/${index}`).set({ status: 0 });
  return database.ref(`/users/${uuid}`).update(postData);
};

export default changeFirebaseCancelCabinetUser;
