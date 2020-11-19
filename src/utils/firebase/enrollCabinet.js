import cancelCabinet from './cancelCabinet';

const { default: Swal } = require('sweetalert2');
const { database } = require('../../configs/firebase.config');
const { default: writeUserData } = require('./writeUserData');

const enrollCabinet = (
  cabinetTitle,
  userCabinetTitle,
  userCabinetIdx,
  select,
  currentUserID,
  userId,
  currentUserName,
) => {
  if (userCabinetTitle === 0 && userCabinetIdx === 0) {
    database.ref(`cabinet/${cabinetTitle}/item/${select}`).transaction(
      (cabinet) => {
        if (cabinet === 0) {
          return currentUserID;
        }
        // eslint-disable-next-line no-useless-return
        return;
      },
      (error, committed, snapshot) => {
        if (error) {
          Swal.fire({
            icon: 'error',
            title: '사물함 신청 에러',
            text: `관리자에게 문의해 주세요.`,
            showConfirmButton: true,
            width: '25rem',
            timer: 5000,
          });
        } else if (!committed) {
          Swal.fire({
            icon: 'error',
            title: '사물함 신청 실패',
            text: `이미 신청한 사람이 있거나 신청이 불가능합니다.`,
            showConfirmButton: true,
            width: '25rem',
            timer: 5000,
          });
        } else {
          writeUserData(
            userId,
            currentUserName,
            currentUserID,
            cabinetTitle,
            select,
          );
          Swal.fire({
            icon: 'success',
            title: '사물함 신청 성공',
            text: `${select}번 사물함으로 신청되었습니다`,
            showConfirmButton: true,
            width: '25rem',
            timer: 5000,
          });
        }
      },
    );
  } else {
    Swal.fire({
      icon: 'question',
      title: '사물함 신청 취소',
      html:
        '현재 등록된 사물함을 취소해야합니다.<br/>' +
        '정말 사물함을 취소하시겠습니까?',
      showConfirmButton: true,
      showCancelButton: true,
      confirmButtonText: '예',
      cancelButtonText: '아니오',
      width: '35rem',
    }).then((result) => {
      if (result.isConfirmed) {
        cancelCabinet(
          userCabinetTitle,
          userCabinetIdx,
          currentUserID,
          userId,
          currentUserName,
        );
      }
    });
  }
};

export default enrollCabinet;
