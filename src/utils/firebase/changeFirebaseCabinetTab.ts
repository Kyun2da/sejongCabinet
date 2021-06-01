import { CabinetItemType } from './../../redux/cabinet/cabinetSlice';
import { database } from '../../config/firebase.config';
import { store } from '../../redux/store';
import customSwal from '../alert';
import changeFirebaseCancelCabinetUser from './changeFirebaseCancelCabinetUser';
import initializeFirebaseCabinetTab from './initializeFirebaseCabinetTab';

export default function changeFirebaseCabinetTab(
  cabinetNum: number,
  cabinetTitle: string,
  cabinetWidth: number,
  cabinetHeight: number,
  isSizeDiffrent: boolean,
) {
  if (isSizeDiffrent) {
    customSwal(
      'warning',
      '사물함 초기화 필요',
      '넓이와 높이를 바꾸기 위해서는 현재 등록된 사물함탭이 전부 예약가능 상태로 초기화 됩니다. 정말 사물함을 초기화 하시겠습니까?',
      true,
    ).then((result) => {
      if (result.isConfirmed) {
        initializeFirebaseCabinetTab(cabinetNum);
        // 가로 세로 정보 바꾸고 모든 아이템을 0으로 초기화
        const itemObject: CabinetItemType[] = [];
        for (let i = 0; i < cabinetWidth * cabinetHeight; i += 1) {
          itemObject.push({ status: 0 });
        }
        database.ref(`cabinet/${cabinetNum}/width`).set(cabinetWidth);
        database.ref(`cabinet/${cabinetNum}/height`).set(cabinetHeight);
        database.ref(`cabinet/${cabinetNum}/item`).set(itemObject);
        database.ref(`cabinet/${cabinetNum}/title`).set(cabinetTitle);
      }
    });
  } else {
    // 사물함 제목만 변경
    database.ref(`cabinet/${cabinetNum}/title`).set(cabinetTitle);
  }
}
