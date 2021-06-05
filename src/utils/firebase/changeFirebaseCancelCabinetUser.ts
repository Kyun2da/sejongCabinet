import { database } from '../../config/firebase.config';
import { serverStatusType } from '../../redux/server/serverSlice';

const { default: Swal } = require('sweetalert2');

const changeFirebaseCancelCabinetUser = (
  cabinetNum: number,
  index: number,
  uuid: string | undefined | null,
) => {
  const postData = {
    cabinetIdx: null,
    cabinetTitle: null,
  };

  database.ref(`/cabinet/${cabinetNum}/item/${index}`).transaction(
    (cabinet) => {
      if (cabinet.uuid === uuid) {
        return { status: 0 };
      }

      return;
    },
    (error, committed) => {
      if (error) {
        Swal.fire({
          icon: 'error',
          title: '사물함 취소 에러',
          text: `관리자에게 문의해 주세요.`,
          showConfirmButton: true,
          width: 'auto',
          timer: 2500,
        });
      } else if (!committed) {
        Swal.fire({
          icon: 'error',
          title: '사물함 취소 실패',
          text: `취소가 불가능합니다.`,
          showConfirmButton: true,
          width: 'auto',
          timer: 2500,
        });
      } else {
        Swal.fire({
          icon: 'success',
          title: '사물함 신청이 취소되었습니다',
          width: 'auto',
          showConfirmButton: true,
          timer: 2000,
        });

        database.ref(`/users/${uuid}`).update(postData);
      }
    },
  );
};

export default changeFirebaseCancelCabinetUser;
