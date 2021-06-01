import { database } from '../../config/firebase.config';
import customSwal from '../alert';
import initializeFirebaseCabinetTab from './initializeFirebaseCabinetTab';

export default function deleteFirebaseCabinetTab(cabinetNum: number) {
  customSwal(
    'warning',
    '사물함 삭제 주의',
    '탭에 해당되는 사물함 예약정보가 삭제되고 탭이 삭제됩니다. 정말 삭제하시겠습니까?',
    true,
  ).then((result) => {
    if (result.isConfirmed) {
      initializeFirebaseCabinetTab(cabinetNum);
      database.ref(`cabinet/${cabinetNum}`).set(null);
    }
  });
}
