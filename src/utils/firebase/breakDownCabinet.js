import customSwal from '../alert/swal';
const { database } = require('../../configs/firebase.config');

const breakDownCabinet = (cabinetTitle, select) => {
  database.ref(`cabinet/${cabinetTitle}/item/${select}`).transaction(
    (cabinet) => {
      if (cabinet === 0) {
        return 2;
      }
      // eslint-disable-next-line no-useless-return
      return;
    },
    (error, committed) => {
      if (error) {
        customSwal('error', '사물함 고장 에러', '관리자에게 문의해 주세요.');
      } else if (!committed) {
        customSwal(
          'error',
          '사물함 고장 실패',
          '이미 고장낸 사람이 있거나 고장이 불가능합니다.',
        );
      } else {
        customSwal(
          'success',
          '사물함 고장 성공',
          `${select}번 사물함이 고장상태로 변경되었습니다.`,
        );
      }
    },
  );
};

export default breakDownCabinet;
