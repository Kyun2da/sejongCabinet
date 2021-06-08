import { database } from '../../config/firebase.config';
import Swal from 'sweetalert2';

const changeCabinetStatus = (
  cabinetIndex: number,
  selectedCabinet: number,
  changeStatus: number,
) => {
  database.ref(`cabinet/${cabinetIndex}/item/${selectedCabinet}`).set({
    status: changeStatus,
  });

  Swal.fire({
    icon: 'success',
    title: '사물함 상태가 변경되었습니다',
    width: 'auto',
    showConfirmButton: true,
    timer: 2000,
  });
};

export default changeCabinetStatus;
