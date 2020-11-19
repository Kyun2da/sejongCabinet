const { default: Swal } = require('sweetalert2');
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
        // eslint-disable-next-line no-useless-return
        return;
      },
      (error, committed) => {
        if (error) {
          Swal.fire({
            icon: 'error',
            title: '사물함 취소 에러',
            text: `관리자에게 문의해 주세요.`,
            showConfirmButton: true,
            width: '25rem',
            timer: 5000,
          });
        } else if (!committed) {
          Swal.fire({
            icon: 'error',
            title: '사물함 취소 실패',
            text: `취소가 불가능합니다.`,
            showConfirmButton: true,
            width: '25rem',
            timer: 5000,
          });
        } else {
          writeUserData(userId, currentUserName, currentUserID, 0, 0);
          Swal.fire({
            icon: 'success',
            title: '사물함 취소 성공',
            text: ` ${select}번 사물함이 취소되었습니다`,
            showConfirmButton: true,
            width: '30rem',
            timer: 5000,
          });
        }
      },
    );
};

export default cancelCabinet;
