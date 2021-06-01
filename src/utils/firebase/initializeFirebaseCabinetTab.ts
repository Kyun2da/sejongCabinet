import { store } from '../../redux/store';
import changeFirebaseCancelCabinetUser from './changeFirebaseCancelCabinetUser';

export default function initializeFirebaseCabinetTab(cabinetNum: number) {
  const getCabinetItem = store.getState().cabinet.cabinet?.[cabinetNum].item;
  getCabinetItem?.map((item, index) => {
    // 사물함 돌아다니며 예약되어 있는 사용자 아이디의 예약 정보 초기화
    if (item.uuid) {
      changeFirebaseCancelCabinetUser(cabinetNum, index, item.uuid);
    }
  });
}
