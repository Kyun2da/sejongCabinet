import customSwal from '../alert/swal';
const { database } = require('../../configs/firebase.config');
const { default: writeUserData } = require('./writeUserData');

const cancelCabinet = (
  userCabinetTitle,
  userCabinetIdx,
  currentUserID,
  userId,
  currentUserName,
) => {
  const select = userCabinetIdx;
  database
    .ref(`cabinet/${userCabinetTitle}/item/${userCabinetIdx}`)
    .transaction(
      (cabinet) => {
        if (cabinet === currentUserID) {
          return 0;
        }
        return;
      },
      (error, committed) => {
        if (error) {
          customSwal('error', '사물함 취소 에러', '관리자에게 문의해 주세요.');
        } else if (!committed) {
          customSwal('error', '사물함 취소 실패', '취소가 불가능합니다.');
        } else {
          writeUserData(userId, currentUserName, currentUserID, 0, 0);
          customSwal(
            'success',
            '사물함 취소 성공',
            `${select}번 사물함이 취소되었습니다.`,
          );
        }
      },
    );
};

export default cancelCabinet;
