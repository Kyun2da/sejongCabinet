const { default: Swal } = require('sweetalert2');
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
        Swal.fire({
          icon: 'error',
          title: '사물함 고장 에러',
          text: `관리자에게 문의해 주세요.`,
          showConfirmButton: true,
          width: '25rem',
          timer: 5000,
        });
      } else if (!committed) {
        Swal.fire({
          icon: 'error',
          title: '사물함 고장 실패',
          text: `이미 고장낸 사람이 있거나 고장이 불가능합니다.`,
          showConfirmButton: true,
          width: '25rem',
          timer: 5000,
        });
      } else {
        Swal.fire({
          icon: 'success',
          title: '사물함 고장 성공',
          text: `${select}번 사물함이 고장상태로 변경되었습니다`,
          showConfirmButton: true,
          width: '25rem',
          timer: 5000,
        });
      }
    },
  );
};

export default breakDownCabinet;
