import Swal from 'sweetalert2';
import customSwal from '../alert/swal';
import cancelCabinet from './cancelCabinet';

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
        return;
      },
      (error, committed) => {
        if (error) {
          customSwal('error', '사물함 신청 에러', '관리자에게 문의해 주세요.');
        } else if (!committed) {
          customSwal(
            'error',
            '사물함 신청 실패',
            '이미 신청한 사람이 있거나 신청이 불가능합니다.',
          );
        } else {
          writeUserData(
            userId,
            currentUserName,
            currentUserID,
            cabinetTitle,
            select,
          );
          customSwal(
            'success',
            '사물함 신청 성공',
            `${select}번 사물함으로 신청되었습니다.`,
          );
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
