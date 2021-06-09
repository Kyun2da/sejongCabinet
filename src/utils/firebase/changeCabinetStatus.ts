import { database } from '../../config/firebase.config';
import Swal from 'sweetalert2';

const changeCabinetStatus = (
  cabinetIndex: number,
  selectedCabinet: number,
  changeStatus: 0 | 2,
) => {
  if (changeStatus === 2) {
    Swal.fire({
      icon: 'warning',
      title: '사물함 상태 변경',
      text: `사물함의 상태를 고장 상태로 변경하시겠습니까?`,
      showCancelButton: true,
      showConfirmButton: true,
      confirmButtonText: '네',
      cancelButtonText: '아니요',
      confirmButtonColor: 'rgb(63,81,181)',
    }).then((result) => {
      if (result.isConfirmed) {
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
      }
    });
  } else if (changeStatus === 0) {
    Swal.fire({
      icon: 'warning',
      title: '사물함 상태 변경',
      text: `고장난 사물함을 고치시겠습니까?`,
      showCancelButton: true,
      showConfirmButton: true,
      confirmButtonText: '네',
      cancelButtonText: '아니요',
      confirmButtonColor: 'rgb(63,81,181)',
    }).then((result) => {
      if (result.isConfirmed) {
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
      }
    });
  }
};

export default changeCabinetStatus;
