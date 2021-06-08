import { database } from '../../config/firebase.config';
import Swal from 'sweetalert2';
import type { CabinetItemType } from '../../redux/cabinet/cabinetSlice';

const applyForCabinet = (
  cabinetIndex: number,
  selectedCabinet: number,
  { status, uuid, name, studentID }: CabinetItemType,
) => {
  database.ref(`cabinet/${cabinetIndex}/item/${selectedCabinet}`).transaction(
    (cabinet) => {
      if (cabinet.status === 0) {
        return {
          status: status,
          uuid: uuid,
          studentID: studentID,
          name: name,
        };
      }

      return;
    },
    (error, committed, snapshot) => {
      if (error) {
        Swal.fire({
          icon: 'error',
          title: '사물함 신청 에러',
          text: `관리자에게 문의해 주세요.`,
          showConfirmButton: true,
          width: 'auto',
          timer: 5000,
        });
      } else if (!committed) {
        Swal.fire({
          icon: 'error',
          title: '사물함 신청 실패',
          text: `이미 신청한 사람이 있거나 신청이 불가능합니다.`,
          showConfirmButton: true,
          width: 'auto',
          timer: 5000,
        });
      } else {
        database.ref(`users/${uuid}`).set({
          adminType: 0,
          cabinetIdx: selectedCabinet,
          cabinetTitle: cabinetIndex,
          name: name,
          studentID: studentID,
        });
      }
    },
  );
};

export default applyForCabinet;
